import * as React from 'react';
import data from '../utils/data/data.json';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { Cardv2 } from '../components/Cardv2';
import { Layout } from '../components/Layout';
import { ReactElement } from 'react';
import { OutsideLink } from '../types/types';
import { Box, Button, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

export const Projects: React.FC = () => {
  const projects = data['projects'];
  const old_projects = data['oldProjects'];
  return (
    <Box
      sx={{
        backgroundImage: `url($../../img/cds.webp)`,
        backgroundRepeat: 'no-repeat',
        height: 'auto',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <Box
        id="header"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          padding: '4rem 3rem 0rem 0rem',
        }}
      >
        <Text
          sx={{
            fontWeight: 900,
            fontSize: '2.5rem',
            fontFamily: 'Graphik,Helvetica,Arial,sans-serif !important',
            marginBottom: '1.3rem',
            flex: '50%',
            marginLeft: 'auto',
            textAlign: 'right',
          }}
        >
          Explore Our Current and Past Work
        </Text>
        <Button
          sx={{
            backgroundColor: '#7186FB',
            color: '#fcd12f',
            fontSize: '16px',
            fontFamily: 'Graphik,Helvetica,Arial,sans-serif !important',
            fontWeight: 'bolder',
            flex: '50%',
            marginLeft: 'auto',
            lineHeight: '40px',
            width: '200px',
          }}
        >
          Jump to Projects
        </Button>
      </Box>
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
