import * as React from 'react';
import data from '../utils/data/data.json';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { Box, Button, Spacer, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

export const Projects: React.FC = () => {
  const projects = data['projects'];
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url($../../img/cds.webp)`,
          backgroundRepeat: 'no-repeat',
          height: '950px',
          backgroundSize: 'cover',
          position: 'relative',
          width: '100%',
        }}
      >
        <Fade delay={300} duration={1500} cascade damping={0.3} fraction={0.15}>
          <Box
            id="header"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              padding: '5.5rem 0rem 0rem 2.2rem',
            }}
          >
            <Text
              sx={{
                fontWeight: 900,
                fontSize: '2.5rem',
                fontFamily: 'Graphik,Helvetica,Arial,sans-serif !important',
                marginBottom: '1.3rem',
                flex: '50%',
                marginRight: 'auto',
                textAlign: 'left',
                color: '#ADDBEF',
              }}
            >
              Explore Our Current and Past Work
            </Text>
            <Button
              sx={{
                color: '#B7E0F1',
                fontSize: '16px',
                fontFamily: 'Graphik,Helvetica,Arial,sans-serif !important',
                fontWeight: 'bolder',
                flex: '50%',
                marginRight: 'auto',
                lineHeight: '40px',
                width: '150px',
                borderColor: '#ADBAEF !important',
              }}
              variant="outline"
            >
              <a href="#middle">Jump to Projects</a>
            </Button>
          </Box>
        </Fade>
      </Box>
      <Box
        fontSize="22px !important"
        margin="55px"
        fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
        fontStyle="italic"
        sx={{ height: 'auto', textAlign: 'center' }}
      >
        <Text
          fontSize="22px !important"
          marginBottom="20px"
          _hover={{ color: '#dcae34' }}
        >
          SAIL is committed to developing open-source software products that
          have direct impacts on academic research, public service, and
          industry.
        </Text>
      </Box>
      <Spacer />
      <Text
        id="middle"
        _hover={{ color: '#dcae34' }}
        fontSize="30px"
        fontWeight="700"
        marginLeft="40px"
        fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
      >
        Dive into different areas we work in
      </Text>
      <Box
        sx={{
          height: 'auto',
          margin: '20px 1.5rem 20px 2rem',
          textAlign: 'center',
        }}
      >
        <ProjectsGrid
          title="Projects"
          list={projects}
          showText={false}
          showSelect={true}
        />
      </Box>
    </Box>
  );
};
