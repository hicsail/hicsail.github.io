import * as React from 'react';
import {
  ONGOINGRESEARCH_LIST,
  PASTRESEARCH_LIST,
} from '../utils/data/researchInformation';
import { Box, Flex, Text } from '@chakra-ui/react';
import {
  OLD_PROJECTS_LIST,
  PROJECTS_LIST,
} from '../utils/data/projectInformation';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { Select } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
export const Projects: React.VFC = () => {
  return (
    <Layout title={null}>
      <ProjectsGrid
        title="Active Projects"
        list={PROJECTS_LIST}
        showText={true}
      />
      <ProjectsGrid
        title="Legacy Projects"
        list={OLD_PROJECTS_LIST}
        showText={false}
      />
    </Layout>
  );
};
