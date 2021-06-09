import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ONGOINGRESEARCH_LIST } from '../utils/data';

export const OngoingResearch: React.VFC = () => {
  return (
    <Flex width="80%" display="column" justifyContent="center">
      <Box marginBottom="30px">
        <Heading>Ongoing Research</Heading>
      </Box>
      <Box>
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
      </Box>
    </Flex>
  );
};
