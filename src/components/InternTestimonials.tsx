import {
  Box,
  Flex,
  Link,
  Avatar,
  Image,
  Text,
  Grid,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { InternTestimonial } from '../types/types';
import { INTERNTESTIMONIALS_LIST } from '../utils/data/peopleInformation';

interface Props {}

export const InternTestimonials: React.FC<Props> = ({}) => {
  const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' });

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: '1fr 1fr',
      }}
      columnGap="15rem"
    >
      {INTERNTESTIMONIALS_LIST.map((intern: InternTestimonial, i) => (
        <Flex mt="1rem" direction={['column', 'row']} key={i}>
          <Box mr="1rem" width="150px">
            <Avatar src={intern.href} size={avatarSize} name={intern.name} />
          </Box>
          <Box>
            <Box>
              <Text as="i" textStyle="paragraph" fontSize="1.25rem">
                {intern.quote}{' '}
              </Text>
              <Text textStyle="paragraph">
                - {intern.name}, {intern.season}
              </Text>
            </Box>
          </Box>
        </Flex>
      ))}
    </Grid>
  );
};
