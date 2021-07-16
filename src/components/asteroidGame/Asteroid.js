import Particle from './Particle';
import { asteroidVertices, randomNumBetween } from './helpers';

function randomColor() {
  let texttheme = ['#E0533B', '#EBB54A', '#94ED6B', '#73A6FC'];
  let color = texttheme[Math.floor(Math.random() * texttheme.length)];

  return color;
}

export default class Asteroid {
  constructor(args) {
    this.position = args.position;
    this.velocity = {
      // x: 0.1,
      // y: 0.1,
      x: randomNumBetween(-0.001, 0.001),
      y: randomNumBetween(-0.001, 0.001),
    };
    // this.rotation = 1;
    // this.rotation = randomNumBetween(-1, 1);
    this.rotation = 0;
    // this.rotationSpeed = randomNumBetween(-0.001, 0.001);
    // this.rotationSpeed = randomNumBetween(-1, 1);
    this.rotationSpeed = 0;

    this.radius = args.size;
    this.score = Math.round((80 / this.radius) * 5);
    this.create = args.create;
    this.addScore = args.addScore;
    this.vertices = asteroidVertices(
      Math.floor(randomNumBetween(3, 4)),
      args.size,
    );
    this.color = randomColor();
  }

  destroy() {
    this.delete = true;
    this.addScore(this.score);

    // Explode
    for (let i = 0; i < this.radius; i++) {
      const particle = new Particle({
        lifeSpan: randomNumBetween(60, 100),
        size: randomNumBetween(1, 3),
        position: {
          x:
            this.position.x +
            randomNumBetween(-this.radius / 4, this.radius / 4),
          y:
            this.position.y +
            randomNumBetween(-this.radius / 4, this.radius / 4),
        },
        velocity: {
          x: randomNumBetween(-1.5, 1.5),
          y: randomNumBetween(-1.5, 1.5),
        },
      });
      this.create(particle, 'particles');
    }

    // Break into smaller asteroids
    // if (this.radius > 10) {
    if (this.radius > 30) {
      for (let i = 0; i < 2; i++) {
        let asteroid = new Asteroid({
          size: this.radius / 2,
          position: {
            x: randomNumBetween(-10, 20) + this.position.x,
            y: randomNumBetween(-10, 20) + this.position.y,
          },
          create: this.create.bind(this),
          addScore: this.addScore.bind(this),
        });
        this.create(asteroid, 'asteroids');
      }
    }
  }

  render(state) {
    // Move
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Rotation
    this.rotation += this.rotationSpeed;
    if (this.rotation >= 360) {
      this.rotation -= 360;
    }
    if (this.rotation < 0) {
      this.rotation += 360;
    }

    // this.rotation += randomNumBetween(-360, 360);

    // Screen edges
    if (this.position.x > state.screen.width + this.radius)
      this.position.x = -this.radius;
    else if (this.position.x < -this.radius)
      this.position.x = state.screen.width + this.radius;
    if (this.position.y > state.screen.height + this.radius)
      this.position.y = -this.radius;
    else if (this.position.y < -this.radius)
      this.position.y = state.screen.height + this.radius;

    // Draw
    const context = state.context;
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate((this.rotation * Math.PI) / 180);

    //Color Style
    context.strokeStyle = this.color;
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(this.vertices[0].x, this.vertices[0].y);
    for (let i = 1; i < this.vertices.length; i++) {
      context.lineTo(this.vertices[i].x, this.vertices[i].y);
    }
    context.closePath();
    context.stroke();
    context.restore();
  }
}
