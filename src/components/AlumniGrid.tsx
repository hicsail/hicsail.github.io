import { Grid, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components';
import { ALUMNI } from '../utils/data/alumni';
import { AlumniInformation } from '../types/types';

const GridColumn = styled.div`
  flex-grow: 1;
`;

function sortByName() {
  return function (a: AlumniInformation, b: AlumniInformation): number {
    if (a['Name'] > b['Name']) {
      return 1;
    } else if (a['Name'] < b['Name']) {
      return -1;
    }
    return 0;
  };
}

export const AlumniGrid: React.FC = () => {
  return (
    <Grid gap={4} alignItems="space-around">
      <Grid
        templateColumns="1fr 1fr 1fr"
        padding="20px 20px 20px 0px"
        fontSize="20px"
      >
        <GridColumn>Name</GridColumn>
        <GridColumn>Post-SAIL Position(s)</GridColumn>
      </Grid>
      {ALUMNI.sort(sortByName()).map(({ Name, Post_SAIL }, i) => (
        <Grid
          templateColumns="1fr 1fr 1fr"
          padding="20px 20px 20px 0px"
          autoFlow="column"
          key={i}
        >
          <GridColumn>{Name}</GridColumn>
          <GridColumn>{Post_SAIL}</GridColumn>
        </Grid>
      ))}
    </Grid>
  );
};
