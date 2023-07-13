// @ts-nocheck
import * as React from 'react';
import { useEffect } from 'react';
import { Layout } from './Layout';
import Counter from '../utils/scripts/counter.js';
import { renderCarousel } from '../utils/scripts/collaborators.js';

// import { BarChart } from "../components/visualisations/BarChart.jsx";
// ts-ignore
import * as d3 from 'd3';

export const Collaborators: React.FC = () => {
  const [collaborators, setCollaborators] = React.useState({ data: [] });
  const [departments, setDepartments] = React.useState({ data: [] });
  const [organizations, setOrganizations] = React.useState({ data: [] });

  const getCollaborators = async () => {
    if (!sessionStorage.getItem('collaborators')) {
      const resp = await fetch(
        `http://localhost:3000/api/getList/collaborators`,
        {
          method: 'GET',
        },
      );
      const data = await resp.json();
      console.log('data', data);
      setCollaborators({ data: data });
      sessionStorage.setItem('collaborators', JSON.stringify(data));
    } else {
      console.log('already have collaborators');
    }
  };

  useEffect(() => {
    getCollaborators();

    if (sessionStorage.getItem('collaborators')) {
      renderVisualization();
    }
    // console.log("collaborators", JSON.parse(sessionStorage.getItem('collaborators') || '{}'));
  }, []);

  var margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 490 - margin.left - margin.right,
    height = 490 - margin.top - margin.bottom;
  var svg = d3
    .select('#data')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  const renderVisualization = () => {
    const data = JSON.parse(sessionStorage.getItem('collaborators') || '[]');
    const departments = Counter(
      data.map((d: any) => d['Dept']).filter((dept: string) => dept != ''),
    );
    const roles = Counter(
      data
        .map((d: any) => d['Role'])
        .filter((role: string) => role != '' && role != null),
    );

    const finalData = [];
    for (const [key, value] of Object.entries(roles)) {
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
      .attr('transform', 'translate(-10,0)rotate(-15)')
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
      .attr('fill', '#69b3a2');

    renderCarousel(departments);
  };

  return (
    <Layout title="Collaborators">
      {JSON.parse(sessionStorage.getItem('collaborators') || '[]').length >
      0 ? (
        <div className="main">
          <div className="data">
            <h2 className="center-heading">Roles</h2>
            <div className="barChart"></div>
          </div>

          <div>
            <h2 className="center-heading">Departments</h2>

            <div
              className="carousel slide"
              data-ride="carousel"
              id="carouselExampleControls"
            >
              <div
                className="carousel-inner"
                style={{ textAlign: 'center' }}
              ></div>

              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="false"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="false"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Layout>
  );
};
