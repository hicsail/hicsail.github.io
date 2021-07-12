import { Box, Flex, Heading, Stack, Text, Link } from '@chakra-ui/react';
import * as React from 'react';
import { PASTRESEARCH_LIST } from '../utils/researchInformation';

export const PastResearch: React.VFC = () => {
  return (
    <Flex width="80%" display="column" justifyContent="center">
      <Box marginBottom="30px">
        <Heading>Past Research</Heading>
      </Box>
      <Box>
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
      </Box>
    </Flex>
  );
};
