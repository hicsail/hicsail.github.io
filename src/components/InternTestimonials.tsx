import { Box, Flex, Image, Text, Grid } from '@chakra-ui/react';
import * as React from 'react';
import { InternTestimonial } from '../types/types';
import { INTERNTESTIMONIALS_LIST } from '../utils/data/peopleInformation';

interface Props {}

export const InternTestimonials: React.FC<Props> = ({}) => {
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: '1fr 1fr',
      }}
    >
      {INTERNTESTIMONIALS_LIST.map((intern: InternTestimonial) => (
        <Flex mt="1rem" direction={['column', 'row']}>
          <Box mr="1rem" width="150px">
            <Image
              src={intern.href}
              width="100%"
              objectFit="cover"
              fallbackSrc="../../img/sail-image-placeholder.png"
            ></Image>
          </Box>
          <Box>
            <Box>
              <Text as="i" textStyle="paragraph" fontSize="1.75rem">
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
