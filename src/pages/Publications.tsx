import * as React from 'react';
import { PublicationsGrid } from '../components/PublicationsGrid';
import { PUBLICATIONS_LIST } from '../utils/researchInformation';

export const Publications: React.VFC = () => (
  <PublicationsGrid title="Publications" list={PUBLICATIONS_LIST} />
);
