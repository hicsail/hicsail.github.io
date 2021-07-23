import { Box, Link, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ProjectInformation } from '../../types/types';

export const PROJECT_LIST: Array<ProjectInformation> = [
  {
    icons: ['institution', 'gavel', 'balance-scale'],
    title: 'Amicus Curiae Briefs',
    text: 'A web-based query interface for a data set describing the network of amicus curiae briefs (and signing organizations) filed in support of or against a side in Supreme Court cases over the past century.',
    pi: (
      <>
        <Link
          href="http://www.bu.edu/polisci/people/faculty/christenson/"
          color="#567dbd"
        >
          Dino Christenson,{' '}
        </Link>
        <Text as="span">Associate Professor, CAS Political Science</Text>
      </>
    ),
  },
  {
    icons: ['mobile', 'commenting-o'],
    title: 'Smoking Cessation Mobile App',
    text: 'Development and deployment (within the context of a study) of a behavioral intervention mobile app to help individuals interested in quitting smoking.',
    pi: (
      <>
        <Link
          href="https://www.bu.edu/dental/profile/belinda-borrelli/"
          color="#567dbd"
        >
          Belinda Borrelli,{' '}
        </Link>
        <Text as="span">Professor, SDM</Text>
      </>
    ),
  },
  {
    icons: ['check-square-o', 'bar-chart'],
    title: 'Spinal Cord Injury - Functional Index',
    text: 'Construction of an adaptive web survey platform (including an accessible front-end web application, back-end database and API, and algorithm translations) to help spinal cord injury patients assess their progress.',
    pi: (
      <>
        <Link href="https://www.bu.edu/sph/profile/mary-slavin" color="#567dbd">
          Mary Slavin,{' '}
        </Link>
        <Text as="span">Research Assistant Professor, SPH</Text>
      </>
    ),
  },
  {
    icons: ['flask'],
    title: 'Clotho Synthetic Biology Framework',
    text: 'Development of the latest production-ready version of a framework for engineering synthetic biological systems and managing the data used to create them.',
    pi: (
      <>
        <Link href="http://cidarlab.org/doug-densmore" color="#567dbd">
          Douglas Densmore,{' '}
        </Link>
        <Text as="span">Associate Professor, ENG ECE</Text>
      </>
    ),
  },
  {
    icons: ['eye'],
    title: 'Eye Tracking',
    text: 'Unifying, converting, and enhancing a mix of scripts for parsing eye tracking data, with a particular focus on automatically interpolating data produced by eye tracking hardware used for experiments in cognitive science and linguistics.',
    pi: (
      <>
        <Link href="http://blogs.bu.edu/sarunach" color="#567dbd">
          Sudha Arunachalam,{' '}
        </Link>
        <Text as="span">Assistant Professor, SAR</Text>
      </>
    ),
  },
  {
    icons: ['book', 'graduation-cap'],
    title: 'Views of Education across Nations',
    text: 'Application of natural language processing techniques (NLP) such as frequency analysis, sentiment analysis, and topic modeling to a data set of British and Danish novels to explore how views of education influence historical trends.',
    pi: (
      <>
        <Link
          href="https://www.bu.edu/polisci/people/faculty/martin"
          color="#567dbd"
        >
          Cathie Jo Martin,{' '}
        </Link>
        <Text as="span">Professor, CAS Political Science</Text>
      </>
    ),
  },
  {
    icons: ['bolt', 'plug'],
    title: 'Power Grid Topology Control Optimization',
    text: 'Porting, profiling, parallelizing, and optimizing algorithms that control power grid transmission topologies (in preparation for incorporation of the algorithms into production-quality applications).',
    pi: (
      <>
        <Link href="http://www.bu.edu/pcms/caramanis/" color="#567dbd">
          Michael Caramanis,{' '}
        </Link>
        <Text as="span">Prof. &</Text>
        <Link
          href="http://www.bu.edu/eng/profile/pablo-a-ruiz-phd/"
          color="#567dbd"
        >
          Pablo Ruiz,{' '}
        </Link>
        <Text as="span">Research Assoc. Prof., ENG</Text>
      </>
    ),
  },
];
