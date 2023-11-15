import * as React from 'react';
import { PRESENTATIONS_LIST } from './researchInformation';
import { PublicationsGrid } from './PublicationsGrid';

export const Presentations: React.FC = () => (
  <PublicationsGrid title="Presentations" list={PRESENTATIONS_LIST} />
);
