import * as React from 'react';
import { useEffect } from 'react';
import { Layout } from './Layout';
import Counter from '../utils/scripts/counter.js';
import {
  renderCarousel,
  renderOrganizations,
  drawFrequencyGraph,
  collaboratorsByDepartment,
} from '../utils/scripts/collaborators.js';
import Carousel from 'react-bootstrap/Carousel';
// ts-ignore
import * as d3 from 'd3';

export const Collaborators: React.FC = () => {
  const [collaborators, setCollaborators] = React.useState([]);

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
      setCollaborators(data);
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
  });

  const renderVisualization = () => {
    const data = JSON.parse(sessionStorage.getItem('collaborators') || '[]');
    const numberOfCollaborators = data.filter(
      (d: any) => d['status'] == 'onboarding',
    ).length;

    document.getElementById('numEngaged')!.innerHTML =
      numberOfCollaborators.toString();

    const deptList = data.map((d: any) => d['Department']);
    const departments = deptList.filter(
      (dept: string, index: number) =>
        dept != '' && dept != null && deptList.indexOf(dept) === index,
    );

    /* const roles = Counter(
      data
        .map((d: any) => d['Role'])
        .filter((role: string) => role != '' && role != null),
    ); */

    // drawFrequencyGraph(roles);
    // renderOrganizations(departments);
    collaboratorsByDepartment(data);
  };

  return (
    <Layout title="Collaborators">
      {collaborators.length > 0 || sessionStorage.getItem('collaborators') ? (
        <div
          className="collaborators"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            textAlign: 'center',
          }}
        >
          <div id="activelyEngaged">
            <h2 className="center-heading">
              Currently actively engaged collaborators
            </h2>
            <p
              id="numEngaged"
              className="numEngaged bigNumber"
              style={{ fontSize: '3rem' }}
            ></p>
          </div>

          {/* <div className="data">
            <h2>Roles</h2>
            <div className="barChart"></div>
          </div> */}

          {/* <div>
            <h2 className="center-heading">Organizations</h2>
            <div>
              <ul id="orgList" className="list-group"></ul>
            </div>
          </div> */}
          <div>
            <h2 className="center-heading">Departments</h2>
            <div id="collabByDepartment"></div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Layout>
  );
};
