import Counter from './counter.js';
import { frequencyGraph, frequencyGraphHorizontal } from './graphs.js';
import * as d3 from 'd3';

var margin = { top: 30, right: 30, bottom: 70, left: 60 },
  width = 490 - margin.left - margin.right,
  height = 490 - margin.top - margin.bottom;

const collaboratorsByDepartment = (data) => {
  const result = d3
    .rollups(
      data,
      (xs) => xs.length,
      (d) => d.Dept,
    )
    .map(([k, v]) => ({ X: k, Y: v }));

  const resultFiltered = result.filter((d) => (d.Y > 0) & (d.X != null));
  // get the top 5 objects with highest Y value
  resultFiltered.sort((a, b) => b.Y - a.Y);
  resultFiltered.splice(5, resultFiltered.length - 5);

  console.log('result', result);
  frequencyGraph('collabByDepartment', resultFiltered, 'Y', false, 'blue');
};

function drawFrequencyGraph(data) {
  var svg = d3
    .select('.data')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  const finalData = [];
  for (const [key, value] of Object.entries(data)) {
    finalData.push({ Role: key, Count: value });
  }

  var x = d3
    .scaleBand()
    .range([0, width])
    .domain(
      finalData.map(function (d) {
        return d.Role;
      }),
    )
    .padding(0.2);

  svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('transform', 'translate(30,0)rotate(-10)')
    .style('text-anchor', 'end');

  var y = d3
    .scaleLinear()
    .domain([0, d3.max(finalData, (d) => d.Count) + 5])
    .range([height, 0]);

  svg.append('g').call(d3.axisLeft(y));

  svg
    .selectAll('mybar')
    .data(finalData)
    .join('rect')
    .attr('x', (d) => x(d.Role))
    .attr('y', (d) => y(d.Count))
    .attr('width', x.bandwidth())
    .attr('height', (d) => height - y(d.Count))
    .attr('fill', 'red');
}

const renderCarousel = (departments) => {
  const departmentsList = Object.keys(departments);
  departmentsList.shift();

  const carousel = document.getElementsByClassName('carousel-inner')[0];
  departmentsList.forEach((item, index) => {
    const listItem = document.createElement('div');
    const txt = document.createElement('p');
    const imageItem = document.createElement('img');
    if (index == 0 && item != 'External') {
      listItem.setAttribute('class', 'carousel-item active');
    } else if (item != 'External') {
      listItem.setAttribute('class', 'carousel-item');
    }
    listItem.setAttribute('style', 'width: 600px;');

    txt.innerHTML = item;

    imageItem.setAttribute('src', '../../img/person.jpg');
    imageItem.setAttribute('width', '300px');
    imageItem.setAttribute('height', '300px');

    listItem.appendChild(imageItem);
    listItem.appendChild(txt);

    carousel.appendChild(listItem);
  });
};

const renderOrganizations = (organizations) => {
  const orgList = document.getElementById('orgList');
  organizations.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    listItem.setAttribute('class', 'list-group-item');

    orgList.appendChild(listItem);
  });
};

export { renderCarousel };
export { drawFrequencyGraph };
export { renderOrganizations };
export { collaboratorsByDepartment };
