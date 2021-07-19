import * as React from 'react';
import {
  ONGOINGRESEARCH_LIST,
  PASTRESEARCH_LIST,
} from '../utils/data/researchInformation';
import { ResearchGrid } from '../components/ResearchGrid';

export const Research = () => {
  return (
    <React.Fragment>
      <ResearchGrid title="Ongoing Research" list={ONGOINGRESEARCH_LIST} />
      <ResearchGrid title="Past Research" list={PASTRESEARCH_LIST} />
    </React.Fragment>
  );
};
