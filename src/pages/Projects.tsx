import * as React from 'react';
import data from '../utils/data/data.json';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { Layout } from '../components/Layout';
import { ReactElement } from 'react';
import { OutsideLink } from '../types/types';
import { Box, Button, Text } from '@chakra-ui/react';

export const Projects: React.FC = () => {
  const projects = data['projects'];
  const old_projects = data['oldProjects'];
  return (
    <Box
      sx={{
        backgroundImage: `url($../../img/cds.webp)`,
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <Box
        id="header"
        sx={{
          display: 'flex',
          right: 26,
          lineHeight: '200px',
          fontWeight: 900,
          fontSize: '45px',
          position: 'absolute',
          textAlign: 'center',
          top: '15%',
          width: '45%',
          fontFamily: 'Graphik,Helvetica,Arial,sans-serif !important',
        }}
      >
        Explore Our Current and Past Work
        <Button
          sx={{
            position: 'absolute',
            top: '82%',
            right: '18%',
            width: '35%',
            height: '25%',
            backgroundColor: '#FCD12F',
            color: '#7186FB',
            fontSize: '18px',
          }}
        >
          Jump to projects
        </Button>
      </Box>
    </Box>
  );
};
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
//Tokenomics -
//DARPA SIEVE
//Microservices

//Natural Sciences
//NIST
//STORM-Chaser
//DAMP Lab
//Phoenix
//Microb-DB

//MLSC
//Synthera + DAMP

//Digital Health
//fNIRS +
//Center for Young Colorful Minds (CYCM) +
//web-OMM -
//BROC Online Inquiry System (FHS) +
//RESTORE +
//NOISE-SCORE
//VA App -
//ANCHOR -
//Black women's health study
//DILEMMA

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
