import Counter from './counter.js';
import * as d3 from 'd3';

var margin = { top: 30, right: 30, bottom: 70, left: 60 };
var width = 460 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

function frequencyGraph(div, data, field, process, color = '#69b3a2') {
  const finalData = [];
  const translation = -10;
  const rotation = -45;

  if (process) {
    const fieldArray = data.map((d) => d[field]);
    const fieldCount = Counter(fieldArray);

    for (const [key, value] of Object.entries(fieldCount)) {
      finalData.push({ X: key, Y: value });
    }
  } else {
    finalData = data;
  }

  console.log(finalData);

  var margin = { top: 30, right: 30, bottom: 70, left: 60 };
  var width = 460 - margin.left - margin.right;
  var height = 400 - margin.top - margin.bottom;

  // check if the X axis text is too long
  const isTextLong = finalData.some((d) => d.X.length > 20);
  if (isTextLong) {
    translation = 0;
    rotation = -25;
  }

  var x = d3
    .scaleBand()
    .range([0, width])
    .domain(
      finalData.map(function (d) {
        return d.X;
      }),
    )
    .padding(0.2);

  var svg = d3
    .select('#' + div)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('transform', `translate(${translation},0)rotate(${rotation})`)
    .style('text-anchor', 'end');

  var y = d3
    .scaleLinear()
    .domain([0, d3.max(finalData, (d) => d.Y) + 5])
    .range([height, 0]);

  svg.append('g').call(d3.axisLeft(y));

  svg
    .selectAll('mybar')
    .data(finalData)
    .join('rect')
    .attr('x', (d) => x(d.X))
    .attr('y', (d) => y(d.Y))
    .attr('width', x.bandwidth())
    .attr('height', (d) => {
      return height - y(d.Y);
    })
    .attr('fill', color);
}

function frequencyGraphHorizontal(div, data, field, process) {
  const finalData = [];

  width = 800;
  if (process) {
    const fieldArray = data.map((d) => d[field]);
    const fieldCount = Counter(fieldArray);

    for (const [key, value] of Object.entries(fieldCount)) {
      finalData.push({ X: key, Y: value });
    }
  } else {
    finalData = data;
  }

  console.log(finalData);

  // X axis
  const color = d3.scaleOrdinal().range(d3.schemeSet2);

  // Compute the position of each group on the pie:
  const pie = d3.pie().value(function (d) {
    return d[1];
  });
  const data_ready = pie(Object.entries(data));
  // Now I know that group A goes from 0 degrees to x degrees and so on.

  // shape helper to build arcs:
  const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
    .selectAll('mySlices')
    .data(data_ready)
    .join('path')
    .attr('d', arcGenerator)
    .attr('fill', function (d) {
      return color(d.data[0]);
    })
    .attr('stroke', 'black')
    .style('stroke-width', '2px')
    .style('opacity', 0.7);

  // Now add the annotation. Use the centroid method to get the best coordinates
  svg
    .selectAll('mySlices')
    .data(data_ready)
    .join('text')
    .text(function (d) {
      return 'grp ' + d.data[0];
    })
    .attr('transform', function (d) {
      return `translate(${arcGenerator.centroid(d)})`;
    })
    .style('text-anchor', 'middle')
    .style('font-size', 17);
}

const pieChart = (div, data, field) => {
  const finalData = [];
  const fieldArray = data.map((d) => d[field]);
  const fieldCount = Counter(fieldArray);

  for (const [key, value] of Object.entries(fieldCount)) {
    finalData.push({ field: key, count: value });
  }

  var width = 450;
  height = 450;
  margin = 40;

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  var radius = Math.min(width, height) / 2 - margin;

  // append the svg object to the div called 'my_dataviz'
  var svg = d3
    .select('#my_dataviz')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  // set the color scale
  var color = d3.scaleOrdinal().domain(finalData).range(d3.schemeSet2);

  // Compute the position of each group on the pie:
  var pie = d3.pie().value(function (d) {
    return d.value;
  });
  var finalData_ready = pie(d3.entries(finalData));
  // Now I know that group A goes from 0 degrees to x degrees and so on.

  // shape helper to build arcs:
  var arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
    .selectAll('mySlices')
    .data(finalData_ready)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill', function (d) {
      return color(d.finalData.key);
    })
    .attr('stroke', 'black')
    .style('stroke-width', '2px')
    .style('opacity', 0.7);

  // Now add the annotation. Use the centroid method to get the best coordinates
  svg
    .selectAll('mySlices')
    .data(finalData_ready)
    .enter()
    .append('text')
    .text(function (d) {
      return 'grp ' + d.finalData.key;
    })
    .attr('transform', function (d) {
      return 'translate(' + arcGenerator.centroid(d) + ')';
    })
    .style('text-anchor', 'middle')
    .style('font-size', 17);
};

export { frequencyGraph, frequencyGraphHorizontal, pieChart };
