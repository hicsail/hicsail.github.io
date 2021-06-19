import { Box, Flex, Heading, Stack, Text, Link } from '@chakra-ui/react';
import * as React from 'react';
import { PASTRESEARCH_LIST } from '../utils/researchInformation';
import { Layout } from '../components/Layout';

export const PastResearch: React.VFC = () => {
  return (
    <Layout title="Past Research">
      {PASTRESEARCH_LIST.map((research) => (
        <Flex direction="column" padding="20px 20px 20px 0px">
          <Heading>
            <Link href={research.link} isExternal>
              {research.title}
            </Link>
          </Heading>
          <Text>Description: {research.description}</Text>
        </Flex>
      ))}
    </Layout>
  );
};
