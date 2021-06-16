import { Grid, Flex, Text, Link } from '@chakra-ui/react';
import * as React from 'react';
import { ALUMNI_LIST } from '../utils/peopleInformation';

export const AlumniGrid = () => {
  return (
    <Grid
      // templateColumns="repeat(4, 1fr)"
      // templateRows="repeat(4, 1fr)"
      gap={4}
      alignItems="space-around"
      // width="100%"
    >
      <Grid
        // direction="row"
        // justifyContent="space-between"
        templateColumns="25% 25% 25% 25%"
        padding="20px 20px 20px 0px"
        // alignItems=""
      >
        <Text as="u" flexGrow={1} fontSize="20px">
          Name
        </Text>
        <Text as="u" flexGrow={1} fontSize="20px">
          Prior Position
        </Text>
        <Text as="u" flexGrow={1} fontSize="20px">
          Current Position
        </Text>
        <Text as="u" flexGrow={1} fontSize="20px">
          URL
        </Text>
      </Grid>
      {ALUMNI_LIST.map(
        ({ name, priorPosition, currentPosition, outsideLinks }) => (
          <Grid
            templateColumns="25% 25% 25% 25%"
            padding="20px 20px 20px 0px"
            autoFlow="column"
            // direction="row"
            // justifyContent="space-between"
            // padding="20px 20px 20px 0px"
          >
            <Text flexGrow={1}>{name}</Text>
            <Text flexGrow={1}>{priorPosition}</Text>
            <Text flexGrow={1}>{currentPosition}</Text>
            <Link flexGrow={1} href={outsideLinks[0]}>
              <Text>{outsideLinks}</Text>
            </Link>
          </Grid>
        ),
      )}
    </Grid>
  );
};
