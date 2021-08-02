// From: http://codepen.io/bungu/pen/rawvJe

/**
 * Generates vertices for asteroid polygon with certain count and radius
 * @param  {Number} count   Number of vertices
 * @param  {Number} rad     Maximal radius of polygon
 * @return {Array}        Array of vertices: {x: Number, y: Number}
 */
export function asteroidVertices(count, rad) {
  let p = [];

  if (count == 3) {
    let triangleVariant = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    let variant =
      triangleVariant[Math.floor(Math.random() * triangleVariant.length)];

    switch (variant) {
      case 'topLeft':
        p[0] = {
          x: -rad,
          y: rad,
        };
        p[1] = {
          x: -rad,
          y: -rad,
        };
        p[2] = {
          x: rad,
          y: -rad,
        };
        break;

      case 'topRight':
        p[0] = {
          x: rad,
          y: -rad,
        };
        p[1] = {
          x: -rad,
          y: -rad,
        };
        p[2] = {
          x: rad,
          y: rad,
        };

        break;

      case 'bottomLeft':
        p[0] = {
          x: -rad,
          y: rad,
        };
        p[1] = {
          x: -rad,
          y: -rad,
        };
        p[2] = {
          x: rad,
          y: rad,
        };

        break;

      case 'bottomRight':
        p[0] = {
          x: -rad,
          y: rad,
        };
        p[1] = {
          x: rad,
          y: rad,
        };
        p[2] = {
          x: rad,
          y: -rad,
        };

        break;
    }
  } else if (count == 4) {
    p[0] = {
      x: -rad,
      y: rad,
    };
    p[1] = {
      x: -rad,
      y: -rad,
    };
    p[2] = {
      x: rad,
      y: -rad,
    };
    p[3] = {
      x: rad,
      y: rad,
    };
  }

  return p;
}

/**
 * Rotate point around center on certain angle
 * @param {Object} p        {x: Number, y: Number}
 * @param {Object} center   {x: Number, y: Number}
 * @param {Number} angle    Angle in radians
 */
export function rotatePoint(p, center, angle) {
  return {
    x:
      (p.x - center.x) * Math.cos(angle) -
      (p.y - center.y) * Math.sin(angle) +
      center.x,
    y:
      (p.x - center.x) * Math.sin(angle) +
      (p.y - center.y) * Math.cos(angle) +
      center.y,
  };
}

/**
 * Random Number between 2 numbers
 */
export function randomNumBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
}

/**
 * Random Number between 2 numbers excluding a certain range
 */
export function randomNumBetweenExcluding(min, max, exMin, exMax) {
  let random = randomNumBetween(min, max);
  while (random > exMin && random < exMax) {
    random = Math.random() * (max - min + 1) + min;
  }
  return random;
}

export function randomColor() {
  let texttheme = ['#E0533B', '#EBB54A', '#94ED6B'];
  let color = texttheme[Math.floor(Math.random() * texttheme.length)];

  return color;
}

export function shipVertices(rad, rotation, position) {
  let p = [];

  p[0] = { x: 0, y: rad };

  p[1] = { x: 20, y: -20 };

  p[2] = { x: -20, y: -20 };

  return p;
}
