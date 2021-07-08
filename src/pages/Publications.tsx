import { Box, Flex, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { PUBLICATIONS_LIST } from '../utils/researchInformation';

export const Publications: React.VFC = () => (
  <Layout title="Publications">
    <Stack direction={'column'} spacing={4}>
      {PUBLICATIONS_LIST.map((publication) => (
        <Flex direction="column">
          <Box>{publication.title}</Box>
          <Box>
            {publication.authors}
            {publication.date}
          </Box>
        </Flex>
      ))}
    </Stack>
  </Layout>
);
