import * as React from 'react';
import data from '../../utils/data/data.json';
import { ProjectsGrid } from '../../components/ProjectsGrid/ProjectsGrid';
import { DataVisual } from '../../components/DataVisual/DataVisual';
import { Box, Button, Spacer, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import './Projects.css';

export const Projects: React.FC = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('middleText');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const projects = data['projects'];
  return (
    <Box>
      <Box
        id="imgContainer"
        sx={{
          backgroundImage: `url($../../img/cds.webp)`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Fade delay={300} duration={1500} cascade damping={0.3} fraction={0.15}>
          <Box id="header">
            <Text id="imgText" sx={{}}>
              Explore Our Current and Past Work
            </Text>
            <Button
              id="jumpButton"
              variant="outline"
              onClick={handleClickScroll}
            >
              <a>Jump to Projects</a>
            </Button>
          </Box>
        </Fade>
      </Box>
      <Box id="textBlurb">
        <Text>
          SAIL is committed to developing open-source software products that
          have direct impacts on academic research, public service, and
          industry.
        </Text>
      </Box>
      <DataVisual />
      <Text id="middleText">Dive into different areas we work in</Text>
      <Box id="projectsContainer">
        <ProjectsGrid
          title="Projects"
          list={projects}
          showText={false}
          showSelect={true}
        />
      </Box>
      <Spacer />
    </Box>
  );
};
