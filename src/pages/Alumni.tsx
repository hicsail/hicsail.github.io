import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Divider,
} from '@chakra-ui/react';
import * as React from 'react';
import { AlumniGrid } from '../components/AlumniGrid';
import { ALUMNI_LIST, CURRENTMEMBERS_LIST } from '../utils/peopleInformation';

export const Alumni: React.VFC = () => (
  <Flex
    display="column"
    width="100%"
    justifyContent="flex-start"
    alignItems="flex-start"
  >
    <Box marginBottom="30px" width="100%">
      <Heading>Alumni</Heading>
      <Divider />
    </Box>
    <Box width="100%">
      <AlumniGrid />
    </Box>
  </Flex>
);
