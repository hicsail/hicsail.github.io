import * as React from 'react';
import data from '../utils/data/data.json';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { Box, Button, Spacer, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

export const Projects: React.FC = () => {
  const featured = data['featuredProjects'];
  const projects = data['projects'];
  const old_projects = data['oldProjects'];
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
              padding: '5.5rem 0rem 0rem 4rem',
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
                textAlign: 'right',
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
          Having worked with over 70 collaborators across 20 schools at Boston
          University, SAIL is committed to developing open-source software
          products that have direct impacts on academic research, public
          service, and industry.
        </Text>
      </Box>
      <Spacer />
      <Text
        _hover={{ color: '#dcae34' }}
        fontSize="30px"
        fontWeight="700"
        marginLeft="40px"
        fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
      >
        Featured Projects
      </Text>
      <Box
        id="middle"
        sx={{
          height: 'auto',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <ProjectsGrid
          title="Active Projects"
          list={featured}
          showText={true}
          showSelect={false}
        />
        <Text
          _hover={{ color: '#dcae34' }}
          fontSize="30px"
          fontWeight="700"
          fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
          textAlign="left"
          margin="20px"
        >
          Dive into different areas we work in
        </Text>
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

//transform: scale(1)
//transform-origin: top left
//trnsiion: transform .5s ease
//box-sizing: border-box

//Data Science
//SignLab
//Sign as a service ? part of ASL-LEX?
//PACT +
//LakeSENSE - (no info)
//Climate Lies - (no info)
//EcoFOrecast - is this solely a proposal?
//Cookie Monster - (no info)
//ASL-LEX 2.0 - (no info)
//Shape-Up - (no info)
//CareerMap 2.0 - (no info)
//Camera Mouse +

//EDTech
//SUDTraining.net - no info
//MTSS docs, but no info
//TPAT Teach Performance and Assessment Training +

//Privacy and Security
//BWWC - no info
//Mass Tech - no info
//Tokenomics - minimal info
//DARPA SIEVE +
//Microservices

//Natural Sciences
//NIST +
//STORM-Chaser +
//DAMP Lab - could use a bit more information
//Phoenix - no info - potentially a closed project

//MARS-FRP
//Microb-DB - no info
//COMETS +

//MLSC
//Synthera + DAMP +

//Digital Health
//fNIRS +
//Center for Young Colorful Minds (CYCM) +
//web-OMM - no info
//BROC Online Inquiry System (FHS) +
//RESTORE +
//NOISE-SCORE +
//VA App - no info
//ANCHOR - no info
//Black women's health study - no info
//DILEMMA - no info

//Shipley: MAST Program
//NAACP Media Bias Project

//<ProjectsGrid
//        title="Active Projects"
//       list={projects}
//        showText={true}
//        showSelect={true}
//      />
//      <ProjectsGrid
//        title="Legacy Projects"
//        list={old_projects}
//        showText={false}
//       showSelect={true}    />

{
  /*
				<Box
					id="projects-blobs"
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						flexDirection: 'column',
						padding: '3.2rem 0rem 2rem 7rem',
						gap: '30px',
						overflowY: 'auto',
					}}
				>
					<Fade delay={300} duration={1500} cascade damping={0.3} fraction={0.15}>
						<Box sx={{ flex: '33%', marginRight: 'auto' }}>
							<Cardv2></Cardv2>
						</Box>
						<Box
							sx={{
								flex: '33%',
								marginRight: 'auto',
								marginLeft: '70px !important',
							}}
						>
							<Cardv2></Cardv2>
						</Box>
						<Box sx={{ flex: '33%', marginRight: 'auto' }}>
							<Cardv2></Cardv2>
						</Box>
					</Fade>
				</Box>
            */
}

{
  /*WebkitTransition: 'all 1.5s ease-out',
					MozTransition: 'all 1.5s ease-out',
					transition: 'all 1.5s ease-out',
					'&:hover': {
						backgroundColor: '#F5FBFD',
						WebkitTransition: 'backgroundColor 3000ms linear',
						msTransition: 'backgroundColor 3000ms linear',
						transition: 'background-color 3000ms linear',
					}, */
}
