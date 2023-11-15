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
  const people: Person[] = data['people'];
  const pageText = data['peoplePage'];
  return (
    <Box id="outerContainer">
      <Box id="textContainer">
        <Text id="header1">{pageText[0]}</Text>
        <Heading id="header2">{pageText[1]}</Heading>
        <Text id="header3">{pageText[2]}</Text>
      </Box>
      <Grid id="grid">
        <Fade delay={500} duration={400} cascade damping={0.3} triggerOnce>
          {people.map((person, i) => (
            <Box id="personBox" key={i}>
              <Person person={person} />
            </Box>
          ))}
        </Fade>
      </Grid>
    </Box>
  );
};
