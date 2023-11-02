import * as React from 'react';
import { PublicationsGrid } from './PublicationsGrid';
import { PUBLICATIONS_LIST } from '../utils/data/researchInformation';

export const Publications: React.VFC = () => (
  <PublicationsGrid title="Publications" list={PUBLICATIONS_LIST} />
);
