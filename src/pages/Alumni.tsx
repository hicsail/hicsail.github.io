import * as Papa from 'papaparse';
import * as React from 'react';
import { AlumniGrid } from '../components/AlumniGrid';
import { Layout } from '../components/Layout';

export const Alumni: React.VFC = () => {
  // const [rows, setRows] = React.useState<any[]>([]);
  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(
  //       'https://www.dropbox.com/home?preview=Intern+Alumni.csv',
  //     );
  //     console.log(response);
  //     const reader = response?.body?.getReader();
  //     const result = await reader?.read(); // raw array
  //     const decoder = new TextDecoder('utf-8');
  //     const csv = decoder.decode(result?.value); // the csv text
  //     const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
  //     const rows: any[] = results.data; // array of objects
  //     setRows(rows);
  //   }
  //   getData();
  // }, []); // [] means just do this once, after initial render

  return (
    <Layout title="Alumni">
      <AlumniGrid
      // rows={rows}
      />
    </Layout>
  );
};
