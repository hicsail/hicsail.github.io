import * as React from 'react';
import { AlumniGrid } from '../components/AlumniGrid';
import { ALUMNI_LIST, CURRENTMEMBERS_LIST } from '../utils/peopleInformation';
import { Layout } from '../components/Layout';

export const Alumni: React.VFC = () => (
  <Layout title="Alumni">
    <AlumniGrid />
  </Layout>
);
