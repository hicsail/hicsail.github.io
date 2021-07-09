import * as React from 'react';
import { PASTRESEARCH_LIST } from '../utils/researchInformation';
import { ResearchGrid } from '../components/ResearchGrid';

export const PastResearch: React.VFC = () => {
  return <ResearchGrid title="Past Research" list={PASTRESEARCH_LIST} />;
};
