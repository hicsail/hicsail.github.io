import { Grid, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components';
import { INTERN_ALUMNI } from '../utils/data/alumni';
import { InternInformation } from '../types/types';

const GridColumn = styled.div`
  flex-grow: 1;
`;

function sortByName() {  
  return function(a : InternInformation, b: InternInformation) : number {
    if (a["Name"] > b["Name"]) {
      return 1;  
    } else if (a["Name"] < b["Name"]) {
      return -1;  
    }
    return 0;  
  }  
}

export const AlumniGrid: React.FC = () => {
  return (
    <Grid
      gap={4}
      alignItems="space-around"
      borderTop={useColorModeValue('2px solid black', '2px solid white')}
    >
      <Grid
        templateColumns="1fr 1fr 1fr"
        padding="20px 20px 20px 0px"
        fontSize="20px"
      >
        <GridColumn>Name</GridColumn>
        <GridColumn>Prior Position</GridColumn>
        <GridColumn>Current Position</GridColumn>
      </Grid>
      {INTERN_ALUMNI.sort(sortByName()).map(
        ({ Intern_ID, Name, Prior_Position, Post_Internship }, i) => (
          <Grid
            templateColumns="1fr 1fr 1fr"
            padding="20px 20px 20px 0px"
            autoFlow="column"
            key={i}
          >
            <GridColumn>{Name}</GridColumn>
            <GridColumn>{Prior_Position}</GridColumn>
            <GridColumn>{Post_Internship}</GridColumn>
          </Grid>
        ),
      )}
    </Grid>
  );
};
