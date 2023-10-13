import * as React from 'react';
import { PRESENTATIONS_LIST } from '../utils/data/researchInformation';
import { PublicationsGrid } from '../archived/PublicationsGrid';

export const Presentations: React.FC = () => (
  <PublicationsGrid title="Presentations" list={PRESENTATIONS_LIST} />
);
