import { Grid, Flex, Text, Link } from '@chakra-ui/react';
import * as React from 'react';
import { ALUMNI_LIST } from '../utils/data';

export const AlumniGrid = () => {
  return (
    <Grid templateColumns="1fr" templateRows="repeat(4, 1fr)" gap={4}>
      <Flex
        direction="row"
        // justifyContent="space-between"
        padding="20px 20px 20px 0px"
      >
        <Text>Name</Text>
        <Text>Prior Position</Text>
        <Text>Current Position</Text>
        <Text>URL</Text>
      </Flex>
      {ALUMNI_LIST.map(
        ({ name, priorPosition, currentPosition, outsideLinks }) => (
          <Flex
            direction="row"
            justifyContent="space-between"
            padding="20px 20px 20px 0px"
          >
            <Text>{name}</Text>
            <Text>{priorPosition}</Text>
            <Text>{currentPosition}</Text>
            <Link href={outsideLinks[0]}>
              <Text>{outsideLinks}</Text>
            </Link>
          </Flex>
        ),
      )}
    </Grid>
  );
};
