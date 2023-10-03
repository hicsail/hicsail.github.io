import * as React from 'react';
import { PRESENTATIONS_LIST } from '../utils/data/researchInformation';
import { PublicationsGrid } from '../components/PublicationsGrid';

export const Presentations: React.FC = () => (
  <PublicationsGrid title="Presentations" list={PRESENTATIONS_LIST} />
);
