$(function () {
  var patternSize = 240, gridSizeX = 8, gridSizeY = 5;
  var colors = ['#E0533B', '#EBB54A', '#94ED6B', '#73A6FC', '#FFFFFF'];
  // Set to 0 for canvas.
  var useSVG = 1;

  /**
   * Setup listeners for Bootstrap form.
   */
  function setupListeners() {
    $('form :input').change(function (e) {
      switch (e.target.id) {
        case 'pattern-size':
          patternSize = e.target.value;
          break;
        case 'grid-size-x':
          gridSizeX = e.target.value;
          break;
        case 'grid-size-y':
          gridSizeY = e.target.value;
          break;
        default:
          break;
      }

      // Refresh SVG or Canvas when pattern parameters change
      if (useSVG) {
        var svg = setupSVG();
        drawSVG(svg);
      } else {
        drawCanvas();
      }
    });
  }

  // -----------------------------------------------------------------------------------
  //
  // SVG CODE
  //
  // -----------------------------------------------------------------------------------

  function setupSVG() {
    var svg = d3.select('#svg')
    // Empty HTML first, parameters might have changed
      .html('')
      .append('svg')
      .attr('width', patternSize * gridSizeX)
      .attr('height', patternSize * gridSizeY)
      // Crisp edges makes sure the aliasing doesn't produce a thin line in between triangles
      // Fixes need for 1 px overlap hack
      .attr('shape-rendering', 'crispEdges');

    // Rotate on Alt/Option click, change color on click
    svg.on('click', function () {
      if (d3.event.altKey) {
        rotateTriangle(d3.event.target);
      } else {
        changeColor(d3.event.target);
      }
    });

    return svg;
  }

  function drawSVG(svg) {
    var numHor = gridSizeX * 4,
      numVer = gridSizeY * 4,
      triangleWidth = patternSize / 4,
      polys = [];

    for (var j = 0; j < numVer; j++) {
      for (var i = 0; i < numHor; i++) {
        var rotated = Math.round(Math.random());
        var x = i * triangleWidth;
        var y = j * triangleWidth;
        var color = randomColor(numHor/4, i); // Start gradient 3/4 of the way to the edge.

        var points = getSVGPoints(x, y, triangleWidth, false, rotated);
        var g = svg.append('g');
        g.append('polygon')
          .attr('points', points)
          .attr('fill', color)
          .attr('opacity', Math.min(1.0, (4*i)/numHor));
        polys.push(buildPoly(points, color));

        // Draw second part of square
        color = randomColor(numHor, i);
        points = getSVGPoints(x, y, triangleWidth, true, rotated);
        g.append('polygon')
          .attr('points', points)
          .attr('fill', color);
        polys.push(buildPoly(points, color));
      }
    }
  }

  function getSVGPoints(x, y, width, flipped, rotated) {
    var points = [[x, y], [x + width, y], [x, y + width]];

    for (var i = 0; i < points.length; i++) {
      // Move to origin to rotate
      points[i][0] -= x + width / 2;
      points[i][1] -= y + width / 2;

      if (!flipped) {
        if (rotated) {
          // Rotate 270 degrees
          [points[i][0], points[i][1]] = [points[i][1], -points[i][0]]
        } else {
          // Do nothing, default form
        }
      } else {
        if (rotated) {
          // Rotate 90 degrees
          [points[i][0], points[i][1]] = [-points[i][1], points[i][0]]
        } else {
          // Rotate 180 degrees
          [points[i][0], points[i][1]] = [-points[i][0], -points[i][1]]
        }
      }

      points[i][0] += x + width / 2;
      points[i][1] += y + width / 2;
    }
    return coordsToString(points);
  }

  function rotateTriangle(target) {
    var currentTriangle = d3.select(target),
      thisPoints = stringToCoords(currentTriangle.attr('points'));

    var otherTriangle = d3.select(target.previousElementSibling);
    if (otherTriangle.empty()) {
      otherTriangle = d3.select(target.nextElementSibling);
    }
    var otherPoints = stringToCoords(otherTriangle.attr('points'));

    var width = Math.max(Math.abs(thisPoints[0][0] - thisPoints[1][0]), Math.abs(thisPoints[0][0] - thisPoints[2][0])),
      x, y;

    x = Math.min(thisPoints[0][0], thisPoints[1][0], thisPoints[2][0]);
    y = Math.min(thisPoints[0][1], thisPoints[1][1], thisPoints[2][1]);

    for (var i = 0; i < thisPoints.length; i++) {
      thisPoints[i][0] -= x + width / 2;
      thisPoints[i][1] -= y + width / 2;
      otherPoints[i][0] -= x + width / 2;
      otherPoints[i][1] -= y + width / 2;

      [thisPoints[i][0], thisPoints[i][1]] = [-thisPoints[i][1], thisPoints[i][0]];
      [otherPoints[i][0], otherPoints[i][1]] = [-otherPoints[i][1], otherPoints[i][0]];

      thisPoints[i][0] += x + width / 2;
      thisPoints[i][1] += y + width / 2;
      otherPoints[i][0] += x + width / 2;
      otherPoints[i][1] += y + width / 2;
    }

    thisPoints = coordsToString(thisPoints);
    otherPoints = coordsToString(otherPoints);
    currentTriangle.attr('points', thisPoints);
    otherTriangle.attr('points', otherPoints);
  }

  /**
   * Change color of D3 target to next in list
   * @param target D3 element
   */
  function changeColor(target) {
    var currentColor = d3.select(target).attr('fill'),
      color = cycleColor(currentColor);

    d3.select(target)
      .attr('fill', color);
  }

  /**
   * Convert coordinates to string for SVG
   * @param points Array of x,y coordinates in the form of [[0,0][25,50]]
   * @returns {string} SVG points string in the form of
     */
  function coordsToString(points) {
    var coordsStr = '';
    for (var i = 0; i < points.length; i++) {
      coordsStr += points[i].join(',') + ' ';
    }
    return coordsStr.trim();
  }

  function stringToCoords(str) {
    var coords = str.split(' ');
    for (var i = 0; i < coords.length; i++) {
      coords[i] = coords[i].split(',').map(Number);
    }
    return coords;
  }

  // -----------------------------------------------------------------------------------
  //
  // CANVAS CODE
  //
  // -----------------------------------------------------------------------------------

  function drawCanvas() {
    var canvas = document.getElementById('ctx');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var numHor = gridSizeX * 4;
      var numVer = gridSizeY * 4;
      var triangleWidth = patternSize / 4;

      var polys = [];

      ctx.canvas.width = patternSize * gridSizeX;
      ctx.canvas.height = patternSize * gridSizeY;

      for (var j = 0; j < numVer; j++) {
        for (var i = 0; i < numHor; i++) {
          var rotated = Math.round(Math.random());
          var x = i * triangleWidth;
          var y = j * triangleWidth;
          var color = randomColor();


          drawTriangle(ctx, x, y, triangleWidth, color, false, rotated);
          polys.push(buildPoly(x, y, triangleWidth, color, false, rotated));

          // Draw second part of square
          color = randomColor();
          drawTriangle(ctx, x, y, triangleWidth, color, true, rotated);
          polys.push(buildPoly(x, y, triangleWidth, color, true, rotated));
        }
      }
    }
  }

  function drawTriangle(ctx, x, y, width, color, flipped, rotated) {
    var pi = 3.14159265;
    var rad;

    ctx.save();
    // Move origin for rotation
    ctx.translate(x + width / 2, y + width / 2);

    // Define rotation
    if (!flipped) {
      if (rotated) {
        rad = 270 * pi / 180;
      } else {
        rad = 0;
      }
    } else {
      if (rotated) {
        rad = 90 * pi / 180;
      } else {
        rad = pi;
      }
    }

    // Rotate and restore canvas position
    ctx.rotate(rad);
    ctx.translate(-(x + width / 2), -(y + width / 2));

    // Draw triangle
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    // Add 1 pixel overlap to first of 2 triangles to fix aliasing issue
    if (!flipped) {
      ctx.lineTo(x + width + 1, y);
      ctx.lineTo(x, y + width + 1);
    } else {
      ctx.lineTo(x + width, y);
      ctx.lineTo(x, y + width);
    }
    ctx.fill();

    // Restore canvas
    ctx.restore();

  }

  function buildPoly(points, color) {
    return '<polygon fill="' + color + '" points="' + points + '"></polygon>';
  }

  /**
   * Get random color from colors array based on a point in a given integer range.
   * The probability of white being selected is parameterized by the point.
   * @returns {string} Hex color value.
   */
  function randomColor(range, point) {
    var range = (range == null) ? 100 : range;
    var point = (point == null) ? (range/50) : point;
    var rnd = Math.round(Math.random()*(range-1));
    var choices = [colors[0], colors[1], colors[2], colors[3]];
    return (rnd > point) ? colors[4] : choices[Math.round(Math.random() * (choices.length-1))];
  }

  /**
   * Get next color from colors array
   * @param currentColor Current color in array
   * @returns {string} Hex color value
   */
  function cycleColor(currentColor) {
    var color;

    for (var i = 0; i < colors.length; i++) {
      if (i === colors.length - 1) {
        // Start from first color if end of array
        color = colors[0];
        break;
      } else if (colors[i] === currentColor) {
        color = colors[i + 1];
        break;
      }
    }
    return color;
  }

  // -------------------
  // Application start
  // -------------------
  setupListeners();

  if (useSVG) {
    var svg = setupSVG();
    drawSVG(svg);
  } else {
    drawCanvas();
  }
});