import * as React from 'react';
import { PRESENTATIONS_LIST } from '../utils/data/researchInformation';
import { PublicationsGrid } from '../components/PublicationsGrid';

export const Presentations: React.VFC = () => (
  <PublicationsGrid title="Presentations" list={PRESENTATIONS_LIST} />
);
