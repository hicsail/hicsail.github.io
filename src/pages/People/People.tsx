import './People.css';
import { Box, Text, Heading, Grid } from '@chakra-ui/react';
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
    <Box padding="20px">
      <Box
        fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
        margin="1em 3em 1em 1.3em"
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
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap="25px"
        rowGap="60px"
      >
        <Fade delay={800} duration={600} cascade damping={0.3} triggerOnce>
          {people.map((person, i) => (
            <Box minWidth="300px" resize="horizontal">
              <Person person={person} />
            </Box>
          ))}
        </Fade>
      </Grid>
    </Box>
  );
};
