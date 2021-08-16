import React, { Component } from 'react';
import Ship from './Ship';
import Asteroid from './Asteroid';
import { randomNumBetween, randomNumBetweenExcluding } from './helpers';

import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoArrowUpOutline,
  IoNuclear,
} from 'react-icons/io5';
import { Flex, Spacer, IconButton } from '@chakra-ui/react';

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
      currentScore: 0,
      top: localStorage['topscore'] || 0,
      inGame: false,
      shipLoaded: false,
      colorMode: 'white',
    };
    this.canvasRef = React.createRef(null);
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

  handleTouches(value, id) {
    let keys = this.state.keys;

    switch (id) {
      case 'left':
        keys.left = value;
        break;
      case 'right':
        keys.right = value;
        break;
      case 'up':
        keys.up = value;
        break;
      case 'fire':
        keys.space = value;
        break;
      default:
        break;
    }
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

    const canvas = this.canvasRef;
    const context = canvas.current.getContext('2d');
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
    if (this.state.shipLoaded) {
      this.checkCollisionsWith(this.bullets, this.asteroids, 'bullet');
      this.checkCollisionsWith(this.ship, this.asteroids, 'ship');
    }

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
    console.log('Ratio', this.state.screen.ratio);
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

  launchShip() {
    this.setState({
      shipLoaded: true,
    });
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
        size: Math.round(
          randomNumBetween(
            40,
            80 /
              (this.state.screen.ratio === 1 ? 1 : this.state.screen.ratio - 1),
          ),
        ),
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
        this.checkPointInPolygon(obj1, obj2) ||
        this.checkPointInPolygon(obj1, obj2)
      );
    } else if (obj2.vertices.length == 3 && item1Type === 'ship') {
      return this.checkPolygonInPolygon(obj1, obj2);
    } else if (obj2.vertices.length == 4 && item1Type === 'ship') {
      return this.checkPolygonInPolygon(obj1, obj2);
    }
  }

  checkPointInPolygon(object1, object2) {
    var t2 = this.convertObjectToPolygon(object2);
    var collision = false;
    var next = 0;

    for (var current = 0; current < t2.length; current++) {
      next = current + 1;
      if (next == t2.length) {
        next = 0;
      }

      var vc = t2[current];
      var vn = t2[next];

      var px = object1.position.x;
      var py = object1.position.y;

      if (
        ((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
        px < ((vn.x - vc.x) * (py - vc.y)) / (vn.y - vc.y) + vc.x
      ) {
        collision = !collision;
      }
    }

    return collision;
  }

  checkPolygonInPolygon(object1, object2) {
    var t1 = this.convertObjectToPolygonShip(object1);
    var t2 = this.convertObjectToPolygon(object2);

    var next = 0;
    for (var current = 0; current < t2.length; current++) {
      next = current + 1;
      if (next == t2.length) {
        next = 0;
      }

      var vc = t2[current];
      var vn = t2[next];

      var collision = this.polyLine(t1, vc.x, vc.y, vn.x, vn.y);

      if (collision) {
        return true;
      }

      var collision = this.polyPoint(t2, t1[0].x, t1[0].y);

      if (collision) {
        return true;
      }
    }

    return false;
  }

  polyLine(vertices, x1, y1, x2, y2) {
    var next = 0;
    for (var current = 0; current < vertices.length; current++) {
      next = current + 1;
      if (next == vertices.length) {
        next = 0;
      }

      var x3 = vertices[current].x;
      var y3 = vertices[current].y;
      var x4 = vertices[next].x;
      var y4 = vertices[next].y;

      var hit = this.lineLine(x1, y1, x2, y2, x3, y3, x4, y4);
      if (hit) {
        return true;
      }
    }

    return false;
  }

  polyPoint(vertices, px, py) {
    var collision = false;

    var next = 0;
    for (var current = 0; current < vertices.length; current++) {
      next = current + 1;
      if (next == vertices.length) {
        next = 0;
      }

      var vc = vertices[current];
      var vn = vertices[next];

      if (
        ((vc.y > py && vn.y < py) || (vc.y < py && vn.y > py)) &&
        px < ((vn.x - vc.x) * (py - vc.y)) / (vn.y - vc.y) + vc.x
      ) {
        collision = !collision;
      }
    }
    return collision;
  }

  lineLine(x1, y1, x2, y2, x3, y3, x4, y4) {
    var uA =
      ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
      ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    var uB =
      ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
      ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
      return true;
    }
    return false;
  }

  convertObjectToPolygonShip(object) {
    var vertices = [];

    for (var i = 0; i < object.vertices.length; i++) {
      vertices[i] = this.rotatePoint(
        0,
        0,
        object.vertices[i].x,
        object.vertices[i].y,
        object.rotation,
      );
    }

    for (var i = 0; i < object.vertices.length; i++) {
      vertices[i] = {
        x: (object.position.x + vertices[i].x) / this.state.screen.ratio,
        y: (object.position.y + vertices[i].y) / this.state.screen.ratio,
      };
    }

    return vertices;
  }

  convertObjectToPolygon(object) {
    var vertices = [];

    for (var i = 0; i < object.vertices.length; i++) {
      vertices[i] = {
        x: (object.position.x + object.vertices[i].x) / this.state.screen.ratio,
        y: (object.position.y + object.vertices[i].y) / this.state.screen.ratio,
      };
    }

    return vertices;
  }

  rotatePoint(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle;
    var cosAngle = Math.cos(radians);
    var sinAngle = Math.sin(radians);

    var nx = cosAngle * (x - cx) + sinAngle * (y - cy) + cx;
    var ny = cosAngle * (y - cy) - sinAngle * (x - cx) + cy;

    return { x: nx, y: -1 * ny };
  }

  render() {
    let endgame;
    let startgame;
    let instructions;
    let touchcontrols;
    let message;
    let score;

    if (this.state.currentScore <= 0) {
      message = '0 points... So sad.';
    } else if (this.state.currentScore >= this.state.topScore) {
      message = 'Top score with ' + this.state.currentScore + ' points. Woo!';
    } else {
      message = this.state.currentScore + ' Points though :)';
    }

    if (!this.state.inGame) {
      endgame = (
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            fontSize: '1.5rem',
            // margin: '10px',
          }}
        >
          <button
            style={{
              color: this.props.colorMode == 'white' ? '#000000' : '#FFFFFF',
              fontFamily: 'Karbon',
              cursor: 'pointer',
            }}
            onClick={this.startGame.bind(this)}
          >
            Try Again?
          </button>
        </div>
      );
    }

    if (!this.state.shipLoaded) {
      startgame = (
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            fontSize: '1.5rem',
          }}
        >
          <button
            style={{
              // position: 'absolute',
              // padding: '10px 20px',
              color: this.props.colorMode == 'white' ? '#000000' : '#FFFFFF',
              // margin: '10px',
              fontFamily: 'Karbon',
              cursor: 'pointer',
            }}
            onClick={this.launchShip.bind(this)}
          >
            Ready to Launch? 🚀
          </button>
        </div>
      );
    }

    if (this.props.mobile) {
      touchcontrols = (
        <Flex position="sticky">
          <IconButton
            id="left"
            size="lg"
            isRound
            icon={<IoArrowBackOutline w={6} />}
            onTouchStart={() => this.handleTouches(true, 'left')}
            onTouchMove={() => this.handleTouches(true, 'left')}
            onTouchCancel={() => this.handleTouches(false, 'left')}
            onTouchEnd={() => this.handleTouches(false, 'left')}
          />
          <Spacer />
          <IconButton
            id="right"
            size="lg"
            isRound
            icon={<IoArrowForwardOutline />}
            onTouchStart={() => this.handleTouches(true, 'right')}
            onTouchMove={() => this.handleTouches(true, 'right')}
            onTouchCancel={() => this.handleTouches(false, 'right')}
            onTouchEnd={() => this.handleTouches(false, 'right')}
          />
          <Spacer />
          <IconButton
            id="up"
            size="lg"
            isRound
            icon={<IoArrowUpOutline />}
            onTouchStart={() => this.handleTouches(true, 'up')}
            onTouchMove={() => this.handleTouches(true, 'up')}
            onTouchCancel={() => this.handleTouches(false, 'up')}
            onTouchEnd={() => this.handleTouches(false, 'up')}
          />
          <Spacer />
          <IconButton
            id="fire"
            size="lg"
            isRound
            icon={<IoNuclear />}
            onTouchStart={() => this.handleTouches(true, 'fire')}
            onTouchMove={() => this.handleTouches(true, 'fire')}
            onTouchCancel={() => this.handleTouches(false, 'fire')}
            onTouchEnd={() => this.handleTouches(false, 'fire')}
          />
        </Flex>
      );
    }

    if (this.state.shipLoaded & !this.props.mobile) {
      instructions = (
        <div
          style={{
            backgroundColor: 'orange',
            position: 'absolute',
            top: '80vh',
            right: '5vh',
            fontFamily: 'Courier New, Courier, monospace',
            fontSize: '16px',
            color: 'black',
            padding: '5px 15px',
            boxShadow: '0 5px 25px 0 rgba(0, 0, 0, 0.25)',
          }}
        >
          <div>
            <b>INSTRUCTIONS</b>
            <p>
              Use [&larr;][&uarr;][&rarr;] to MOVE <br /> Use SPACEBAR to shoot{' '}
            </p>
          </div>
        </div>
      );
    }

    if (this.state.shipLoaded) {
      score = (
        <div
          style={{
            fontSize: '1.5rem',
            width: '100%',
            textAlign: 'center',
            // margin: '10px',
          }}
        >
          Score: {this.state.currentScore}
        </div>
      );
    }

    return (
      <div>
        {score}
        {endgame}
        {startgame}
        <canvas
          ref={this.canvasRef}
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * 0.9 * this.state.screen.ratio}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        {touchcontrols}
        {instructions}
      </div>
    );
  }
}
