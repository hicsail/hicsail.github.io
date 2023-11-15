import {
  Box,
  Flex,
  Avatar,
  Text,
  Grid,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { InternTestimonial } from '../types/types';
import { INTERNTESTIMONIALS_LIST } from '../archived/peopleInformation';

interface Props {}

export const InternTestimonials: React.FC<Props> = ({}) => {
  const avatarSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: '1fr 1fr',
      }}
      columnGap="10rem"
    >
      {INTERNTESTIMONIALS_LIST.map((intern: InternTestimonial, i) => (
        <Flex mt="1rem" direction={['column', 'row']} key={i}>
          <Box mr="1rem" width="150px">
            <Avatar src={intern.href} size={avatarSize} name={intern.name} />
          </Box>
          <Box>
            <Box>
              <Text as="i" textStyle="paragraph" fontSize="1.1rem">
                {intern.quote}{' '}
              </Text>
              <Text textStyle="paragraph" fontSize="1.25rem">
                - {intern.name}
                {intern.season && ','} {intern.season}
              </Text>
            </Box>
          </Box>
        </Flex>
      ))}
    </Grid>
  );
};
