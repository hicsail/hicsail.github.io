$(function () {
  var patternSize = 240, numHor = 32, numVer = 14;
  var colors = ['#E0533B', '#EBB54A', '#94ED6B', '#73A6FC', '#FFFFFF'];

  function setupSVG(id) {
    var svg = d3.select('#' + id)
      .html('') // Empty HTML first, parameters might have changed.
      .append('svg')
      .attr('viewBox', '0 0 1700 750')
      .attr('preserveAspectRatio', 'xMinYMin slice')
      .attr('height', '100%')
      .attr('height', '100%')
      // Crisp edges makes sure the aliasing doesn't produce a thin line in between triangles.
      // Fixes need for 1 px overlap hack.
      .attr('shape-rendering', 'crispEdges');

    // Change color randomly on mouseover.
    svg.on('mousemove', function () {
      var target = d3.event.target;
      var curTime = (new Date).getTime();
      if (curTime - d3.select(target).attr('data') > 1000) {
        if (d3.event.shiftKey) {
          rotateTriangle(target);
        } else {
          var currentColor = d3.select(target).attr('fill');
          var color = randomColor(numHor/4, 1 + Math.min(d3.select(target).attr('row'), d3.select(target).attr('column')));
          d3.select(target).attr('fill', color).attr('data', curTime);
        }
      }
    });

    return svg;
  }

  function drawSVG(svg) {
    var triangleWidth = patternSize / 4, polys = [];
    for (var j = 0; j < numVer; j++) {
      for (var i = 0; i < numHor; i++) {
        var rotated = Math.round(Math.random());
        var x = i * triangleWidth;
        var y = j * triangleWidth;

        var color = randomColor(numHor/4, 1 + Math.min(j,i)); // Start gradient 3/4 of the way to the edge.
        var points = getSVGPoints(x, y, triangleWidth, false, rotated);
        var g = svg.append('g');
        g.append('polygon')
          .attr('points', points)
          .attr('fill', color)
          .attr('opacity', Math.max(0.1, Math.min(1.0, (4*i)/numHor, (4*j)/numVer)))
          .attr('row', j)
          .attr('column', i);
        polys.push(buildPoly(points, color));

        // Draw second part of square.
        color = randomColor(numHor/4, 1 + Math.min(j,i)); // Start gradient 3/4 of the way to the edge.
        points = getSVGPoints(x, y, triangleWidth, true, rotated);
        g.append('polygon')
          .attr('points', points)
          .attr('fill', color)
          .attr('opacity', Math.max(0.1, Math.min(1.0, (4*i)/numHor, (4*j)/numVer)))
          .attr('row', j)
          .attr('column', i);
        polys.push(buildPoly(points, color));
      }
    }
  }

  function getSVGPoints(x, y, width, flipped, rotated) {
    var points = [[x, y], [x + width, y], [x, y + width]];

    for (var i = 0; i < points.length; i++) {
      // Move to origin to rotate.
      points[i][0] -= x + width / 2;
      points[i][1] -= y + width / 2;

      if (!flipped) {
        if (rotated) {
          // Rotate 270 degrees.
          [points[i][0], points[i][1]] = [points[i][1], -points[i][0]];
        } else {
          // Do nothing, default form.
        }
      } else {
        if (rotated) {
          // Rotate 90 degrees.
          [points[i][0], points[i][1]] = [-points[i][1], points[i][0]];
        } else {
          // Rotate 180 degrees.
          [points[i][0], points[i][1]] = [-points[i][0], -points[i][1]];
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
    var x, y, width = Math.max(Math.abs(thisPoints[0][0] - thisPoints[1][0]), Math.abs(thisPoints[0][0] - thisPoints[2][0]));
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
    var rnd = Math.random()*range;
    var choices = [colors[0], colors[1], colors[2], colors[3]];
    return (rnd > point) ? colors[4] : choices[Math.round(Math.random() * (choices.length-1))];
  }

  // -------------------
  // Application start
  // -------------------

  var svg_one = setupSVG('svg_one');
  var svg_two = setupSVG('svg_two');
  var svg_three = setupSVG('svg_three');
  drawSVG(svg_one);
  drawSVG(svg_two);
  drawSVG(svg_three);
});