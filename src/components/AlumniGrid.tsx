import { Grid, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import styled from 'styled-components';
import { INTERN_ALUMNI } from '../utils/internInformation';

const GridColumn = styled.div`
  flex-grow: 1;
`;

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
        {/* <GridColumn>URL</GridColumn> */}
      </Grid>
      {INTERN_ALUMNI.map(({ Intern_ID, Name, Cohort, Post_Internship }) => (
        <Grid
          templateColumns="1fr 1fr 1fr"
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
