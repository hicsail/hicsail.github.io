import { Box, Grid } from '@chakra-ui/react';
import * as React from 'react';
import { ONGOINGRESEARCH_LIST } from '../utils/researchInformation';
import { ResearchGrid } from '../components/ResearchGrid';

export const OngoingResearch: React.VFC = () => {
  return <ResearchGrid title="Ongoing Research" list={ONGOINGRESEARCH_LIST} />;
};
