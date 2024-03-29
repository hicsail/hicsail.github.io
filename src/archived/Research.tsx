import * as React from 'react';
import { ONGOINGRESEARCH_LIST, PASTRESEARCH_LIST } from './researchInformation';
import { ResearchGrid } from './ResearchGrid';

export const Research = () => {
  return (
    <React.Fragment>
      <ResearchGrid title="Ongoing Research" list={ONGOINGRESEARCH_LIST} />
      <ResearchGrid title="Past Research" list={PASTRESEARCH_LIST} />
    </React.Fragment>
  );
};
