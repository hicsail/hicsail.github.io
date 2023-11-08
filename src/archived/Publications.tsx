import * as React from 'react';
import { PublicationsGrid } from './PublicationsGrid';
import { PUBLICATIONS_LIST } from './researchInformation';

export const Publications: React.FC = () => (
  <PublicationsGrid title="Publications" list={PUBLICATIONS_LIST} />
);
