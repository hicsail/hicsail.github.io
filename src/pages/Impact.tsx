import * as React from 'react';
import { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Collaborators } from './Collaborators';
import { ProjectsImpact } from './ProjectsImpact';
// @ts-ignore
import getCollaboratorData from '../utils/data/clickup.js';

export const Impact: React.VFC = () => {
  return (
    <Layout title="Impact">
      <Collaborators />
      <ProjectsImpact />
    </Layout>
  );
};
