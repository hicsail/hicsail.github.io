import { Grid, Box } from '@chakra-ui/react';
import * as React from 'react';

export const Research = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: '1fr 1fr',
        md: 'repeat(3, 1fr)',
      }}
      gridTemplateAreas={{
        base: `'about about' 'projects projects' 'projectgrid projectgrid' 'info info' 'contact contact'`,
        md: `'about about about' 'projects projectgrid projectgrid' 'info info info' 'contact contact contact'`,
      }}
      gap={4}
    >
      <Box gridArea="about" bg="gray.500">
        about
      </Box>
      <Box gridArea="projects" bg="green.500">
        projects
      </Box>
      <Box gridArea="projectgrid" bg="red.500">
        projectgrid
      </Box>
      <Box gridArea="info" bg="yellow.500">
        info
      </Box>
      <Box gridArea="contact" bg="orange.500">
        contact
      </Box>
    </Grid>
  );
};
