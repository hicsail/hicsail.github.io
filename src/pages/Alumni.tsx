import * as Papa from 'papaparse';
import * as React from 'react';
import { AlumniGrid } from '../components/AlumniGrid';
import { Layout } from '../components/Layout';

export const Alumni: React.VFC = () => {
  return (
    <Layout title="Alumni">
      <AlumniGrid />
    </Layout>
  );
};
