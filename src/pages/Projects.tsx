import * as React from 'react';
import data from '../utils/data/data.json';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { Layout } from '../components/Layout';
import { ReactElement } from 'react';
import { OutsideLink } from '../types/types';

export const Projects: React.FC = () => {
  const projects = data['projects'];
  const old_projects = data['oldProjects'];
  return (
    <Layout title={null}>
      <ProjectsGrid
        title="Active Projects"
        list={projects}
        showText={true}
        showSelect={true}
      />
      <ProjectsGrid
        title="Legacy Projects"
        list={old_projects}
        showText={false}
        showSelect={true}
      />
    </Layout>
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
