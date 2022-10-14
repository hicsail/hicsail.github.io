import * as React from 'react';
import {
  ONGOINGRESEARCH_LIST,
  PASTRESEARCH_LIST,
} from '../utils/data/researchInformation';
import { PROJECTS_LIST } from '../utils/data/projectInformation';
import { ProjectsGrid } from '../components/ProjectsGrid';
export const Projects: React.VFC = () => {
  return (
    <React.Fragment>
      <ProjectsGrid title="Projects" list={PROJECTS_LIST} />
      {/* <ResearchGrid title="Ongoing Research" list={ONGOINGRESEARCH_LIST} /> */}
      {/* <ResearchGrid title="Past Research" list={PASTRESEARCH_LIST} /> */}
    </React.Fragment>
  );
};
