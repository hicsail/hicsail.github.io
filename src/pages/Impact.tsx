import * as React from 'react';
import { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Collaborators } from '../components/Collaborators';
// @ts-ignore
import getCollaboratorData from '../utils/data/clickup.js';

export const Impact: React.VFC = () => {
  return (
    <Layout title="Impact">
      <Collaborators />
    </Layout>
  );
};
