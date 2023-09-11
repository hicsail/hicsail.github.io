import * as React from 'react';
import {
  OLD_PROJECTS_LIST,
  PROJECTS_LIST,
} from '../utils/data/projectInformation';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { Layout } from '../components/Layout';
export const Projects: React.VFC = () => {
  return (
    <Layout title={null}>
      <ProjectsGrid
        title="Active Projects"
        list={PROJECTS_LIST}
        showText={true}
        showSelect={true}
      />
      <ProjectsGrid
        title="Legacy Projects"
        list={OLD_PROJECTS_LIST}
        showText={false}
        showSelect={true}
      />
    </Layout>
  );
};
