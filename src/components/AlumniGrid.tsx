import { Grid, Flex, Text, Link } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components';
import { ALUMNI_LIST } from '../utils/peopleInformation';

const GridColumn = styled.div`
  flex-grow: 1;
`;

export const AlumniGrid = () => {
  return (
    <Grid gap={4} alignItems="space-around">
      <Grid
        templateColumns="25% 25% 25% 25%"
        padding="20px 20px 20px 0px"
        fontSize="20px"
      >
        <GridColumn>Name</GridColumn>
        <GridColumn>Prior Position</GridColumn>
        <GridColumn>Current Position</GridColumn>
        <GridColumn>URL</GridColumn>
      </Grid>
      {ALUMNI_LIST.map(
        ({ name, priorPosition, currentPosition, outsideLinks }) => (
          <Grid
            templateColumns="25% 25% 25% 25%"
            padding="20px 20px 20px 0px"
            autoFlow="column"
          >
            <GridColumn>{name}</GridColumn>
            <GridColumn>{priorPosition}</GridColumn>
            <GridColumn>{currentPosition}</GridColumn>
            <Link flexGrow={1} href={outsideLinks[0]}>
              <Text>{outsideLinks}</Text>
            </Link>
          </Grid>
        ),
      )}
    </Grid>
  );
};
