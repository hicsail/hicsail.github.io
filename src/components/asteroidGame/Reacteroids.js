import React, { Component } from 'react';
import Ship from './Ship';
import Asteroid from './Asteroid';
import { randomNumBetween, randomNumBetweenExcluding } from './helpers';

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32,
};

export class Reacteroids extends Component {
  constructor(args) {
    super();
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      context: null,
      keys: {
        left: 0,
        right: 0,
        up: 0,
        down: 0,
        space: 0,
      },
      asteroidCount: 10,
      currentSore: 0,
      top: localStorage['topscore'] || 0,
      inGame: false,
      colorMode: 'white',
    };
    this.ship = [];
    this.asteroids = [];
    this.bullets = [];
    this.particles = [];
  }

  handleResize(value, e) {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
    });
  }

  handleKeys(value, e) {
    let keys = this.state.keys;
    if (e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value;
    if (e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.right = value;
    if (e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value;
    if (e.keyCode === KEY.SPACE && e.target == document.body)
      keys.space = value;
    this.setState({
      keys: keys,
    });
  }

  componentDidMount() {
    window.addEventListener(
      'keydown',
      function (e) {
        if (
          ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(
            e.code,
          ) > -1
        ) {
          e.preventDefault();
        }
      },
      false,
    );

    window.addEventListener('keyup', this.handleKeys.bind(this, false));
    window.addEventListener('keydown', this.handleKeys.bind(this, true));
    window.addEventListener('resize', this.handleResize.bind(this, false));

    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });
    this.startGame();
    requestAnimationFrame(() => {
      this.update();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeys);
    window.removeEventListener('keydown', this.handleKeys);
    window.removeEventListener('resize', this.handleResize);
  }

  update() {
    const context = this.state.context;
    const keys = this.state.keys;
    const ship = this.ship[0];
    context.save();
    context.scale(this.state.screen.ratio, this.state.screen.ratio);

    this.state.colorMode = this.props.colorMode;

    if (this.state.colorMode == 'white') {
      context.fillStyle = '#FFFFFF';
    } else {
      context.fillStyle = '#121212';
    }

    context.globalAlpha = 0.4;
    context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
    context.globalAlpha = 1;

    // Next set of asteroids
    if (!this.asteroids.length) {
      let count = this.state.asteroidCount + 1;
      this.setState({ asteroidCount: count });
      this.generateAsteroids(count);
    }

    // Check for colisions
    this.checkCollisionsWith(this.bullets, this.asteroids, 'bullet');
    this.checkCollisionsWith(this.ship, this.asteroids, 'ship');

    // Remove or render
    this.updateObjects(this.particles, 'particles');
    this.updateObjects(this.asteroids, 'asteroids');
    this.updateObjects(this.bullets, 'bullets');
    this.updateObjects(this.ship, 'ship');

    context.restore();

    // Next frame
    requestAnimationFrame(() => {
      this.update();
    });
  }

  addScore(points) {
    if (this.state.inGame) {
      this.setState({
        currentScore: this.state.currentScore + points,
      });
    }
  }

  startGame() {
    this.setState({
      inGame: true,
      currentScore: 0,
    });

    // Make ship
    let ship = new Ship({
      position: {
        x: this.state.screen.width / 2,
        y: this.state.screen.height / 2,
      },
      create: this.createObject.bind(this),
      onDie: this.gameOver.bind(this),
    });
    this.createObject(ship, 'ship');

    // Make asteroids
    this.asteroids = [];
    this.generateAsteroids(this.state.asteroidCount);
  }

  gameOver() {
    this.setState({
      inGame: false,
    });

    // Replace top score
    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore,
      });
      localStorage['topscore'] = this.state.currentScore;
    }
  }

  generateAsteroids(howMany) {
    let asteroids = [];
    let ship = this.ship[0];
    for (let i = 0; i < howMany; i++) {
      let asteroid = new Asteroid({
        size: randomNumBetween(40, 80),
        position: {
          x: randomNumBetweenExcluding(
            0,
            this.state.screen.width,
            ship.position.x - 60,
            ship.position.x + 60,
          ),
          y: randomNumBetweenExcluding(
            0,
            this.state.screen.height,
            ship.position.y - 60,
            ship.position.y + 60,
          ),
        },
        create: this.createObject.bind(this),
        addScore: this.addScore.bind(this),
      });
      this.createObject(asteroid, 'asteroids');
    }
  }

  createObject(item, group) {
    this[group].push(item);
  }

  updateObjects(items, group) {
    let index = 0;
    for (let item of items) {
      if (item.delete) {
        this[group].splice(index, 1);
      } else {
        items[index].render(this.state);
      }
      index++;
    }
  }

  checkCollisionsWith(items1, items2, item1Type) {
    var a = items1.length - 1;
    var b;
    for (a; a > -1; --a) {
      b = items2.length - 1;
      for (b; b > -1; --b) {
        var item1 = items1[a];
        var item2 = items2[b];
        if (this.checkCollision(item1, item2, item1Type)) {
          item1.destroy();
          item2.destroy();
        }
      }
    }
  }

  checkCollision(obj1, obj2, item1Type) {
    if (item1Type === 'bullet') {
      return (
        this.checkBulletTriangleCollision(obj1, obj2) ||
        this.checkBulletSquareCollision(obj1, obj2)
      );
    } else if (obj2.vertices.length == 3 && item1Type === 'ship') {
      return this.checkShipTriangleCollision(obj1, obj2);
    } else if (obj2.vertices.length == 4 && item1Type === 'ship') {
      return this.checkShipSquareCollision(obj1, obj2);
    }
  }

  checkBulletTriangleCollision(obj1, obj2) {
    var x = obj1.position.x;
    var y = obj1.position.y;

    var x1 = obj2.vertices[0].x + obj2.position.x;
    var x2 = obj2.vertices[1].x + obj2.position.x;
    var x3 = obj2.vertices[2].x + obj2.position.x;
    var y1 = obj2.vertices[0].y + obj2.position.y;
    var y2 = obj2.vertices[1].y + obj2.position.y;
    var y3 = obj2.vertices[2].y + obj2.position.y;

    var a =
      ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) /
      ((y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3));
    var b =
      ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) /
      ((y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3));
    var c = 1 - a - b;

    return 0 <= a && a <= 1 && 0 <= b && b <= 1 && 0 <= c && c <= 1;
  }

  checkBulletSquareCollision(obj1, obj2) {
    var bottomLeftX = obj2.vertices[0].x;
    var bottomLeftY = obj2.vertices[0].y;
    var topRightX = obj2.vertices[2].x;
    var topRightY = obj2.vertices[2].y;
    var bulletX = obj1.position.x;
    var bulletY = obj1.position.y;

    if (
      bulletX > bottomLeftX &&
      bulletX < topRightX &&
      bulletY > bottomLeftY &&
      bulletY < topRightY
    ) {
      return true;
    }

    return false;
  }

  checkShipTriangleCollision(object1, object2) {
    var t0 = this.convertObjectToTriangle(object1);
    var t1 = this.convertObjectToTriangle(object2);

    return (
      this.doLinesIntersect(t0.a, t0.b, t1.a, t1.b) ||
      this.doLinesIntersect(t0.a, t0.b, t1.b, t1.c) ||
      this.doLinesIntersect(t0.a, t0.b, t1.c, t1.a) ||
      this.doLinesIntersect(t0.b, t0.c, t1.a, t1.b) ||
      this.doLinesIntersect(t0.b, t0.c, t1.b, t1.c) ||
      this.doLinesIntersect(t0.b, t0.c, t1.c, t1.a) ||
      this.doLinesIntersect(t0.c, t0.a, t1.a, t1.b) ||
      this.doLinesIntersect(t0.c, t0.a, t1.b, t1.c) ||
      this.isPointInTriangle(t0.a, t1) ||
      this.isPointInTriangle(t1.a, t0)
    );
  }

  checkShipSquareCollision(obj1, obj2) {
    var t0 = this.convertObjectToTriangle(obj1);
    var r1 = this.convertObjectToRectangle(obj2);

    return (
      this.doLinesIntersect(t0.a, t0.b, r1.a, r1.b) ||
      this.doLinesIntersect(t0.a, t0.b, r1.b, r1.c) ||
      this.doLinesIntersect(t0.a, t0.b, r1.c, r1.d) ||
      this.doLinesIntersect(t0.a, t0.b, r1.d, r1.a) ||
      this.doLinesIntersect(t0.b, t0.c, r1.a, r1.b) ||
      this.doLinesIntersect(t0.b, t0.c, r1.b, r1.c) ||
      this.doLinesIntersect(t0.b, t0.c, r1.c, r1.d) ||
      this.doLinesIntersect(t0.b, t0.c, r1.d, r1.a) ||
      this.doLinesIntersect(t0.c, t0.a, r1.a, r1.b) ||
      this.doLinesIntersect(t0.c, t0.a, r1.b, r1.c) ||
      this.doLinesIntersect(t0.c, t0.a, r1.c, r1.d) ||
      this.doLinesIntersect(t0.c, t0.a, r1.d, r1.a) ||
      this.isPointInTriangle(r1.a, t0) ||
      this.isPointInTriangle(r1.b, t0) ||
      this.isPointInTriangle(r1.c, t0) ||
      this.isPointInTriangle(r1.d, t0)
    );
  }

  doLinesIntersect(a1, a2, a3, a4) {
    var x12 = a1.x - a2.x;
    var x34 = a3.x - a4.x;
    var y12 = a1.y - a2.y;
    var y34 = a3.y - a4.y;
    var c = x12 * y34 - y12 * x34;
    if (c == 0) {
      return false;
    }
    var a = a1.x * a2.y - a1.y * a2.x;
    var b = a3.x * a4.y - a3.y * a4.x;
    var x = (a * x34 - b * x12) / c;
    var y = (a * y34 - b * y12) / c;
    return (
      (Math.min(a1.x, a2.x) < x &&
        x < Math.max(a1.x, a2.x) &&
        Math.min(a3.x, a4.x) < x &&
        x < Math.max(a3.x, a4.x)) ||
      (Math.min(a1.y, a2.y) < y &&
        y < Math.max(a1.y, a2.y) &&
        Math.min(a3.y, a4.y) < y &&
        y < Math.max(a3.y, a4.y))
    );
  }

  isPointInTriangle(point, triangle) {
    var p = point;
    var p0 = triangle.a;
    var p1 = triangle.b;
    var p2 = triangle.c;
    var dX = p.x - p2.x;
    var dY = p.y - p2.y;
    var dX21 = p2.x - p1.x;
    var dY12 = p1.y - p2.y;
    var D = dY12 * (p0.x - p2.x) + dX21 * (p0.y - p2.y);
    var s = dY12 * dX + dX21 * dY;
    var t = (p2.y - p0.y) * dX + (p0.x - p2.x) * dY;
    if (D < 0) return s <= 0 && t <= 0 && s + t >= D;
    return s >= 0 && t >= 0 && s + t <= D;
  }

  convertObjectToTriangle(object) {
    var vertices = {
      a: {
        x: object.vertices[0].x + object.position.x,
        y: object.vertices[0].y + object.position.y,
      },
      b: {
        x: object.vertices[1].x + object.position.x,
        y: object.vertices[1].y + object.position.y,
      },
      c: {
        x: object.vertices[2].x + object.position.x,
        y: object.vertices[2].y + object.position.y,
      },
    };

    return vertices;
  }

  convertObjectToRectangle(object) {
    var vertices = {
      a: {
        x: object.vertices[0].x + object.position.x,
        y: object.vertices[0].y + object.position.y,
      },
      b: {
        x: object.vertices[1].x + object.position.x,
        y: object.vertices[1].y + object.position.y,
      },
      c: {
        x: object.vertices[2].x + object.position.x,
        y: object.vertices[2].y + object.position.y,
      },
      d: {
        x: object.vertices[3].x + object.position.x,
        y: object.vertices[3].y + object.position.y,
      },
    };

    return vertices;
  }

  render() {
    let endgame;
    let message;

    if (this.state.currentScore <= 0) {
      message = '0 points... So sad.';
    } else if (this.state.currentScore >= this.state.topScore) {
      message = 'Top score with ' + this.state.currentScore + ' points. Woo!';
    } else {
      message = this.state.currentScore + ' Points though :)';
    }

    if (!this.state.inGame) {
      endgame = (
        <div>
          <button
            style={{
              // backgroundColor: 'transparent',
              color: this.state.colorMode == 'white' ? '#000000' : '#FFFFFF',
              fontSize: '1.5rem',
              padding: '10px 20px',
              margin: '10px',
              fontFamily: 'PT Mono, serif',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'center',
              // border: '5px solid black',
            }}
            onClick={this.startGame.bind(this)}
          >
            Try Again?
          </button>
        </div>
      );
    }

    return (
      <div>
        <div
          style={{
            fontSize: '1.5rem',
            width: '100%',
            textAlign: 'center',
          }}
        >
          Score: {this.state.currentScore}
        </div>
        {endgame}
        <canvas
          ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    );
  }
}
