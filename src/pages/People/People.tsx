import './People.css';
import { Box, Text, Container, Heading, Grid } from '@chakra-ui/react';
import * as React from 'react';
import data from '../../utils/data/data.json';
import { Person } from '../../components/Person';
import { Fade } from 'react-awesome-reveal';

interface Person {
  picture: string;
  name: string;
  role: string;
  bio?: string;
  email: string;
}

export const People: React.FC = () => {
  let people: Person[] = data['people'];
  return (
    <Container placeItems="left" boxSizing="unset">
      <Box
        fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
        width="100%"
      >
        <Text
          fontSize="14px"
          fontWeight="500"
          sx={{ WebkitFontSmoothing: 'antialiased' }}
        >
          OUR TEAM
        </Text>
        <Heading
          fontSize="3xl"
          fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
          fontWeight="900"
        >
          Who we are
        </Heading>
        <Text fontSize="15px">
          We are a company working on a multitude of interdisciplinary projects.
        </Text>
        <Text marginBottom="60px"></Text>
      </Box>
      <Grid
        templateColumns={{
          md: 'repeat(1,1fr)',
          lg: 'repeat(2,1fr)',
          xl: 'repeat(3,1fr)',
        }}
        columnGap="16px"
        rowGap="50px"
      >
        <Fade delay={100} duration={500} cascade damping={0.2} fraction={0.15}>
          {people.map((person, i) => (
            <Box minWidth="300px" resize="horizontal">
              <Person person={person} />
            </Box>
          ))}
        </Fade>
      </Grid>
    </Container>
  );
};
