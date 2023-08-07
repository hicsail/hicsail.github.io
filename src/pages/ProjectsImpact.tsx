import * as React from 'react';
import { useEffect } from 'react';
import { Layout } from '../components/Layout';
import Counter from '../utils/scripts/counter.js';
import renderVisualizations from '../utils/scripts/businessDev.js';

export const ProjectsImpact: React.FC = () => {
  const [clients, setClients] = React.useState([]);
  const style = {
    fontSize: '1.5rem',
  };
  const getClients = async () => {
    if (!sessionStorage.getItem('clients')) {
      const resp = await fetch(`http://localhost:3000/api/getList/sail crm`, {
        method: 'GET',
      });
      const data = await resp.json();
      console.log('data', data);
      setClients(data);
      sessionStorage.setItem('clients', JSON.stringify(data));
    } else {
      console.log('already have clients');
    }
  };
  const renderVisualization = () => {
    // get data from sessionStorage
    const data = JSON.parse(sessionStorage.getItem('clients') || '[]');

    const active = data.filter((d: any) => d['status'] === 'funded');
    const numActive = active.length;
    document.getElementsByClassName('active')[0].innerHTML =
      numActive.toString();

    const proposals = data.filter((d: any) => d['Stage'] === 'Proposal');
    const numProposals = proposals.length;
    document.getElementsByClassName('proposals')[0].innerHTML =
      numProposals.toString();

    renderVisualizations(active);
  };
  useEffect(() => {
    getClients();

    if (sessionStorage.getItem('clients')) {
      renderVisualization();
    }
  });

  return (
    <Layout title="Projects">
      {clients.length > 0 || sessionStorage.getItem('clients') ? (
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h1 style={style}>Active Projects</h1>
            <p className="active"></p>
          </div>
          <div>
            <h1 style={style}>Proposals</h1>
            <p className="proposals"></p>
          </div>
          <div>
            <h1 style={style}>Top 5 Department Funding</h1>
            <div id="departmentFunding"></div>
          </div>
          <div>
            <h1 style={style}>Referred By</h1>
            <div id="referred"></div>
          </div>
          <div>
            <h1 style={style}>Award Amount vs Estimated Value</h1>
            <div id="award-estimated"></div>
          </div>
          <div>
            <h1 style={style}>Projects' Intended Timeline with Award Amount</h1>
            <div id="awards"></div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Layout>
  );
};
