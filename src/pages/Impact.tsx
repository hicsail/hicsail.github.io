import * as React from 'react';
import { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Collaborators } from '../components/Collaborators';
import { Clients } from '../components/Clients';
// @ts-ignore
import getCollaboratorData from '../utils/data/clickup.js';

export const Impact: React.VFC = () => {
  return (
    <Layout title="Impact">
      <Collaborators />
      <Clients />
    </Layout>
  );
};
