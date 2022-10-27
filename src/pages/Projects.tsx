import * as React from 'react';
import {
  ONGOINGRESEARCH_LIST,
  PASTRESEARCH_LIST,
} from '../utils/data/researchInformation';
import { Text } from '@chakra-ui/react';
import {
  OLD_PROJECTS_LIST,
  PROJECTS_LIST,
} from '../utils/data/projectInformation';
import { ProjectsGrid } from '../components/ProjectsGrid';
export const Projects: React.VFC = () => {
  return (
    <React.Fragment>
      <ProjectsGrid title="Projects" list={PROJECTS_LIST} showText={true} />
      <ProjectsGrid
        title="Old Projects"
        list={OLD_PROJECTS_LIST}
        showText={false}
      />
    </React.Fragment>
  );
};
