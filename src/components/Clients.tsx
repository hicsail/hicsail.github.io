import * as React from 'react';
import { useEffect } from 'react';
import { Layout } from './Layout';
import Counter from '../utils/scripts/counter.js';
import {
  renderCarousel,
  renderOrganizations,
  drawFrequencyGraph,
} from '../utils/scripts/collaborators.js';

export const Clients: React.FC = () => {
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

    const active = data.filter((d: any) => d['Stage'] === 'Active');
    const numActive = active.length;
    document.getElementsByClassName('active')[0].innerHTML =
      numActive.toString();

    const proposals = data.filter((d: any) => d['Stage'] === 'Proposal');
    const numProposals = proposals.length;
    document.getElementsByClassName('proposals')[0].innerHTML =
      numProposals.toString();
  };
  useEffect(() => {
    getClients();

    if (sessionStorage.getItem('clients')) {
      renderVisualization();
    }
  }, []);

  return (
    <Layout title="Clients">
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
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
      </div>
    </Layout>
  );
};
