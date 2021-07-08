import { Box, Flex, Heading, Link, Stack, Text, Image } from '@chakra-ui/react';
import * as React from 'react';
import { ONGOINGRESEARCH_LIST } from '../utils/researchInformation';
import { Layout } from '../components/Layout';

export const OngoingResearch: React.VFC = () => {
  return (
    <Layout title="Ongoing Research">
      {ONGOINGRESEARCH_LIST.map((research) => (
        <Flex direction="column" padding="20px 20px 20px 0px">
          <Heading>
            <Link href="" isExternal>
              {research.title}
            </Link>
          </Heading>
          <Box>
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              src={research.href}
            />
          </Box>
          <Text>Description: {research.description}</Text>
        </Flex>
      ))}
    </Layout>
  );
};
