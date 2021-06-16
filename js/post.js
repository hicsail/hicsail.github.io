//just change everything
$(function () {
  var fillOrStroke = 'stroke';
  //wgtFn =
  function patternCreate(id, tileSize, numRows, numCols, wgtFn, colors, modes) {
    var svg = d3
      .select('#' + id)
      .html('') // Empty HTML first, parameters might have changed. Meaning you can't put text in the any div pattern create calls
      .append('svg')
      .attr('viewBox', '0 0 ' + tileSize * numCols + ' ' + tileSize * numRows)
      .attr('preserveAspectRatio', 'xMidYMid slice')
      .attr('height', '100%')
      .attr('width', '100%')
      .attr('shape-rendering', 'crispEdges'); // So aliasing doesn't produce thin line between triangles.

    // Change color randomly on mouseover.
    // svg.on('mousemove', function () {
    //   var target = d3.event.target;
    //   console.log(target);
    //   var curTime = (new Date).getTime();
    //   //if you mousover slowly the object it will still change color-- best way?
    //   if (curTime - d3.select(target).attr('data') > 1000) {
    //     if (d3.event.shiftKey) {
    //       rotateTriangle(target);
    //     } else {
    //       var opacity = d3.select(target).attr('opacity'), opacity_ = Math.max(Math.random(), opacity);
    //       d3.select(target).attr('fill', randomColor(1, colors)).attr('opacity', opacity).attr('data', curTime);
    //     }
    //   }
    // });

    svg.on('mouseover', function () {
      var target = d3.event.target;
      var curTime = new Date().getTime();
      if (d3.event.shiftKey) {
        rotateTriangle(target);
      } else {
        var opacity = d3.select(target).attr('opacity'),
          opacity_ = Math.max(Math.random(), opacity);
        d3.select(target)
          .attr(fillOrStroke, randomColor(1, colors))
          .attr('opacity', opacity)
          .attr('data', curTime);
        if (fillOrStroke == 'stroke') {
          d3.select(target).attr('stroke-width', 1.7);
        }

        console.log(d3.select(target).attr(fillOrStroke));
      }
    });
    patternDraw(svg, tileSize, numRows, numCols, wgtFn, colors, modes);
  }

  function patternDraw(svg, tileSize, numRows, numCols, wgtFn, colors, modes) {
    /*function patternRow(r) {
      if (r < numRows) {
        for (var c = 0; c < numCols; c++) {
          var rotated = Math.round(Math.random()), x = c*tileSize, y = r*tileSize, g = svg.append('g');
          triangleDraw(g, tileSize, r, c, wgtFn(r, numRows, c, numCols), colors, modes, rotated, false, x, y);
          triangleDraw(g, tileSize, r, c, wgtFn(r, numRows, c, numCols), colors, modes, rotated, true, x, y);
        }
        setTimeout(function () { patternRow(r+1); }, 1);
      }
    }
    patternRow(0);*/

    /*function draw(r, c) {
      if (r < numRows) {
          var rotated = Math.round(Math.random()), x = c*tileSize, y = r*tileSize, g = svg.append('g');
          triangleDraw(g, tileSize, r, c, wgtFn(r, numRows, c, numCols), colors, modes, rotated, false, x, y);
          triangleDraw(g, tileSize, r, c, wgtFn(r, numRows, c, numCols), colors, modes, rotated, true, x, y);
          c++;
          r += (c == numCols) ? 1 : 0;
          c %= numCols;
          setTimeout(function () { draw(r, c); }, 0);
      }
    }
    draw(0, 0);*/

    setTimeout(function () {
      for (var r = 0; r < numRows; r++) {
        for (var c = 0; c < numCols; c++) {
          var rotated = Math.round(Math.random()),
            x = c * tileSize,
            y = r * tileSize,
            g = svg.append('g');
          var wgt1 = wgtFn(r, numRows, c, numCols),
            wgt2 = wgtFn(r, numRows, c, numCols);
          if (wgt1 > 0)
            triangleDraw(
              g,
              tileSize,
              r,
              c,
              wgt1,
              colors,
              modes,
              rotated,
              false,
              x,
              y,
            );
          if (wgt2 > 0)
            triangleDraw(
              g,
              tileSize,
              r,
              c,
              wgt2,
              colors,
              modes,
              rotated,
              true,
              x,
              y,
            );
        }
      }
    }, 0);
  }

  function triangleDraw(
    g,
    tileSize,
    r,
    c,
    wgt,
    colors,
    modes,
    rotated,
    flipped,
    x,
    y,
  ) {
    var color = randomColor(wgt, colors),
      points = getSVGPoints(x, y, tileSize, flipped, rotated);
    var polygon = g
      .append('polygon')
      .attr('points', points)
      .attr('row', r)
      .attr('column', c);
    if (modes == null || modes.opacity == true)
      polygon.attr('opacity', wgt * 1.2);
    if (color == null) polygon.attr('opacity', 0);
    //
    else polygon.attr(fillOrStroke, color);
  }

  function getSVGPoints(x, y, width, flipped, rotated) {
    var points = [
      [x, y],
      [x + width, y],
      [x, y + width],
    ];
    for (var i = 0; i < points.length; i++) {
      // Move to origin to rotate.
      points[i][0] -= x + width / 2;
      points[i][1] -= y + width / 2;

      if (!flipped) {
        if (rotated) {
          [points[i][0], points[i][1]] = [points[i][1], -points[i][0]]; // Rotate 270 degrees.
        } else {
          // Do nothing, default form.
        }
      } else {
        if (rotated) {
          [points[i][0], points[i][1]] = [-points[i][1], points[i][0]]; // Rotate 90 degrees.
        } else {
          [points[i][0], points[i][1]] = [-points[i][0], -points[i][1]]; // Rotate 180 degrees.
        }
      }

      points[i][0] += x + width / 2;
      points[i][1] += y + width / 2;
    }
    return coordsToString(points);
  }

  function rotateTriangle(target) {
    var currentTriangle = d3.select(target),
      thisPoints = stringToCoords(currentTriangle.attr('points')),
      otherTriangle = d3.select(target.previousElementSibling);
    if (otherTriangle.empty())
      otherTriangle = d3.select(target.nextElementSibling);
    var otherPoints = stringToCoords(otherTriangle.attr('points'));
    var x,
      y,
      width = Math.max(
        Math.abs(thisPoints[0][0] - thisPoints[1][0]),
        Math.abs(thisPoints[0][0] - thisPoints[2][0]),
      );
    x = Math.min(thisPoints[0][0], thisPoints[1][0], thisPoints[2][0]);
    y = Math.min(thisPoints[0][1], thisPoints[1][1], thisPoints[2][1]);

    for (var i = 0; i < thisPoints.length; i++) {
      thisPoints[i][0] -= x + width / 2;
      thisPoints[i][1] -= y + width / 2;
      otherPoints[i][0] -= x + width / 2;
      otherPoints[i][1] -= y + width / 2;
      [thisPoints[i][0], thisPoints[i][1]] = [
        -thisPoints[i][1],
        thisPoints[i][0],
      ];
      [otherPoints[i][0], otherPoints[i][1]] = [
        -otherPoints[i][1],
        otherPoints[i][0],
      ];
      thisPoints[i][0] += x + width / 2;
      thisPoints[i][1] += y + width / 2;
      otherPoints[i][0] += x + width / 2;
      otherPoints[i][1] += y + width / 2;
    }

    currentTriangle.attr('points', coordsToString(thisPoints));
    otherTriangle.attr('points', coordsToString(otherPoints));
  }

  /**
   * Convert coordinates to string for SVG
   * @param points Array of x,y coordinates in the form of [[0,0][25,50]]
   * @returns {string} SVG points string in the form of
   */
  function coordsToString(points) {
    var coordsStr = '';
    for (var i = 0; i < points.length; i++)
      coordsStr += points[i].join(',') + ' ';
    return coordsStr.trim();
  }

  function stringToCoords(str) {
    var coords = str.split(' ');
    for (var i = 0; i < coords.length; i++)
      coords[i] = coords[i].split(',').map(Number);
    return coords;
  }

  var aggFn = function (agg, base, fs) {
    return function (r, nr, c, nc) {
      var v = base;
      for (var i = 0; i < fs.length; i++) v = agg(v, fs[i](r, nr, c, nc));
      return v;
    };
  };
  var minFn = function (fs) {
      return aggFn(Math.min, 1, fs);
    },
    maxFn = function (fs) {
      return aggFn(Math.max, 0, fs);
    };
  var circTopRight = function (r, nr, c, nc) {
    var x = c / nc,
      y = (nr - r) / nr,
      a = 1 - x,
      b = 1 - y;
    var fromBottomLeft = Math.min(
      x,
      y,
      Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 4),
    );
    var fromTopRight = a + b < 0.2 ? Math.min(a, b) : 1;
    return 0.8 * Math.min(fromBottomLeft, 1);
  };
  var circTopLeft = function (r, nr, c, nc) {
    var x = (nc - c) / nc,
      y = (nr - r) / nr,
      a = 1 - x,
      b = 1 - y;
    var fromBottomLeft = Math.min(
      0.8 * x,
      y,
      Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 16),
    );
    return 0.8 * fromBottomLeft;
  };
  var cornerTopRight = function (tr, tc0) {
    return function (r, nr, c, nc) {
      var tc = 1 - tc0;
      return Math.min(
        c >= tc * nc ? (c - tc * nc) / ((1 - tc) * nc) : 0,
        r <= tr * nr ? (tr * nr - r) / (tr * nr) : 0,
      );
    };
  };
  var cornerTopLeft = function (tr, tc) {
    return function (r, nr, c, nc) {
      return Math.min(
        c >= tc * nc ? 0 : (tc * nc - c) / (tc * nc),
        r <= tr * nr ? (tr * nr - r) / (tr * nr) : 0,
      );
    };
  };
  var cornerBottomLeft = function (tr0, tc) {
    return function (r, nr, c, nc) {
      var tr = 1 - tr0;
      return Math.min(
        c >= tc * nc ? 0 : (tc * nc - c) / (tc * nc),
        r <= tr * nr ? 0 : 1 - (nr - r) / ((1 - tr) * nr),
      );
    };
  };
  var cornerBottomRight = function (tr0, tc0) {
    return function (r, nr, c, nc) {
      var tc = 1 - tc0,
        tr = 1 - tr0;
      return Math.min(
        c >= tc * nc ? (c - tc * nc) / ((1 - tc) * nc) : 0,
        r <= tr * nr ? 0 : 1 - (nr - r) / ((1 - tr) * nr),
      );
    };
  };
  var left = function (r, nr, c, nc) {
    return c < 6 ? c / 6 : 1;
  };
  var right = function (r, nr, c, nc) {
    return nc - c < 6 ? (nc - c) / 6 : 1;
  };
  var center = function (r, nr, c, nc) {
    return Math.min(
      1 - Math.abs(nc / 2 - c) / (nc / 2),
      1 - Math.abs(nr / 2 - r) / (nr / 2),
    );
  };
  var edges = function (r, nr, c, nc) {
    return (
      1 -
      Math.sqrt(
        Math.min(
          1 - Math.abs(nc / 2 - c) / (nc / 2),
          1 - Math.abs(nr / 2 - r) / (nr / 2),
        ),
      )
    );
  };
  var rift = function (r, nr, c, nc) {
    var r = nr - r;
    return Math.pow(1 - Math.abs(c / nc - r / nr), 4);
  };
  var path = function (r, nr, c, nc) {
    return Math.pow(Math.abs(c / nc - r / nr), 1.1);
  };
  var path2 = function (r, nr, c, nc) {
    return nr - r + c < 11 || r + (nc - c) < 11 ? 0.99 : 0;
  };

  // List the project summaries.
  listProjects();
  // Construct and render the interactive visualizations.
  //patternCreate('svg_bg', 60, 29, 50, function (r, nr, c, nc) { return Math.abs(nr/2 - r)/(nr/2); } );
  //patternCreate('svg_one', 60, 20, 35, maxFn([cornerTopRight(0.9, 0.15), cornerTopRight(0.3, 0.9)]));
  //patternCreate('pattern_main', 60, 20, 35, maxFn([rift]), ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', null], {'opacity':false});
  patternCreate(
    'svg_top',
    60,
    7,
    16,
    minFn([right, maxFn([cornerTopRight(1, 0.2), cornerTopRight(1, 0.7)])]),
  );
  //patternCreate('pattern_main', 60, 15, 35, maxFn([center]));
  //patternCreate('pattern_offices', 60, 20, 35, maxFn([path, path2]), ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', null], {'opacity':false});
  patternCreate(
    'svg_two_a',
    60,
    10,
    75,
    minFn([
      left,
      maxFn([
        cornerBottomLeft(1, 0.05),
        cornerBottomLeft(0.5, 0.5),
        cornerBottomLeft(0.1, 1),
      ]),
    ]),
  );
  //patternCreate('svg_two_b', 60, 10, 75, minFn([left, maxFn([cornerTopLeft(1, 0.2), cornerTopLeft(0.2, 0.6)])]));
  patternCreate('svg_two_b', 60, 10, 75, minFn([circTopLeft, left]));
  patternCreate(
    'svg_three_a',
    60,
    10,
    75,
    minFn([
      right,
      maxFn([
        cornerBottomRight(1, 0.05),
        cornerBottomRight(0.5, 0.5),
        cornerBottomRight(0.1, 1),
      ]),
    ]),
  );
  //patternCreate('svg_three_b', 60, 10, 75, minFn([right, maxFn([cornerTopRight(1, 0.2), cornerTopRight(0.2, 0.6)])]));
  patternCreate('svg_three_b', 60, 10, 75, minFn([circTopRight, right]));
  patternCreate(
    'pattern_footer',
    60,
    7,
    26,
    minFn([
      left,
      right,
      maxFn([
        function (r, nr, c, nc) {
          return Math.max(0, (r - 2) / nr);
        },
      ]),
    ]),
  );
  $('img').show(); // Do not show images until all patterns have been rendered.
  $('#container').show();
  // Move to target after rendering completes.
  if (location.href.indexOf('#') != -1) location.href = location.href;
});

/*$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({scrollTop: target.offset().top}, 300);
        return false;
      }
    }
  });
});*/
$('a').mouseenter(function (e) {
  var colors = ['lred', 'lorange', 'lgreen'];
  $(this).addClass(colors[Math.floor(Math.random() * colors.length)]);
});
$('a').mouseleave(function (e) {
  $(this).removeClass('lred lorange lgreen lblue');
});

$('#ham').click(function () {
  $('#mobilenav').toggleClass('mactive');
  if ($('.menu').hasClass('menuunder')) {
    $('.menu')
      .delay(270)
      .queue(function () {
        $(this).toggleClass('menuunder');
        $(this).toggleClass('menuover');
        $(this).dequeue();
      });
  } else {
    $('.menu').toggleClass('menuunder');
    $('.menu').toggleClass('menuover');
  }
});
$('.menu a').click(function () {
  $('#ham').prop('checked', false);
  $('#mobilenav').removeClass('mactive');
  $('.menu').removeClass('menuover');
  $('.menu').addClass('menuunder');
});
