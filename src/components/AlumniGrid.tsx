import { Grid, Flex, Text, Link } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components';
import { INTERN_ALUMNI } from '../utils/internInformation';

interface AlumniGridProps {
  rows: Array<any>;
}

const GridColumn = styled.div`
  flex-grow: 1;
`;

export const AlumniGrid: React.FC = () => {
  // console.log('rows: ' + rows);
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
      {INTERN_ALUMNI.map(({ Intern_ID, Name, Cohort, Post_Internship }) => (
        <Grid
          templateColumns="25% 25% 25% 25%"
          padding="20px 20px 20px 0px"
          autoFlow="column"
        >
          <GridColumn>{Name}</GridColumn>
          <GridColumn>{Cohort}</GridColumn>
          <GridColumn>{Post_Internship}</GridColumn>
          {/* <Link flexGrow={1}>
              {outsideLinks.map((outsideLink) => (
                <Flex mr="10px">
                  <Link href={outsideLink.href}>
                    <Text as="u"> {outsideLink.name}</Text>
                  </Link>{' '}
                </Flex>
              ))}
            </Link> */}
        </Grid>
      ))}
    </Grid>
  );
};
