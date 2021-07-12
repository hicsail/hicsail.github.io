import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { PRESENTATIONS_LIST } from '../utils/researchInformation';

export const Presentations: React.VFC = () => (
  <Box>
    <Box>
      <Heading>Presentations</Heading>
    </Box>
    <Box>
      <Stack direction={'row'} spacing={4}></Stack>
      {PRESENTATIONS_LIST.map((presentation) => (
        <Flex direction="column">
          <Box>{presentation.title}</Box>
          <Box>
            {presentation.authors}
            {presentation.date}
          </Box>
        </Flex>
      ))}
    </Box>
  </Box>
);
