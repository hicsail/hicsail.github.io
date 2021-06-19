import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ONGOINGRESEARCH_LIST } from '../utils/researchInformation';
import { Layout } from '../components/Layout';

export const OngoingResearch: React.VFC = () => {
  return (
    <Layout title="Ongoing Research">
      {ONGOINGRESEARCH_LIST.map((research) => (
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
