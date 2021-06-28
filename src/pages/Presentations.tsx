import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { PRESENTATIONS_LIST } from '../utils/researchInformation';
import { Layout } from '../components/Layout';

export const Presentations: React.VFC = () => (
  <Layout title="Presentations">
    <Stack direction={'column'} spacing={4}>
      {PRESENTATIONS_LIST.map((presentation) => (
        <Flex direction="column">
          <Box>{presentation.title}</Box>
          <Box>
            {presentation.authors}
            {presentation.date}
          </Box>
        </Flex>
      ))}
    </Stack>
  </Layout>
);
