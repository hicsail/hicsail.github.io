import { Link, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ProjectInfo, ProjectInformation } from '../types/types';

export const PROJECTS_LIST: Array<ProjectInfo> = [
  {
    title: 'COVID',
    titleDescription: 'Clinical Testing Lab',
    description:
      'To repopulate our three campuses, resume residential learning and student activities, and reopen research labs and clinics, Boston University took a comprehensive, multipronged approach to protecting the health and safety of our community and the public at large. At the center of this effort is testing. Once it became clear the novel coronavirus would persist into the fall of 2020, the University rapidly stood up a clinical testing lab. In addition to a trained staff, the BU Clinical Testing Laboratory is using specialized robots to accelerate testing capacity and, importantly, return results by the end of the next day. SAIL staff was instrumental in developing the automated software and data pipeline central to the testing process.',
    href: '../../../img/research/covid.png',
    projectType: 'Digital Health',
    featured: true,
    pi: null,
    metaDataPresentation: [],
    metaDataPublication: [],
  },
  {
    title: 'Web MPC',
    titleDescription: 'Secure Compensation Analytics for the City of Boston',
    description:
      'In support of the Boston Women’s Workforce Council and its mission to advance salary equity among Boston employers as part of the 100% Talent Compact, SAIL staff and student developers built a secure multi-party computation web application that allows statistical data pertaining to compensation levels across genders and demographics to be collected from over 250 participating employer organizations, such as State Street Corporation and Putnam Investments, without requiring any organization to reveal its confidential data. This platform is unique in that it allows real-world organizations to use what is still largely studied as a theoretical technique, enabling analyses that would have been otherwise impossible to do while preserving the confidentiality of the participants.',
    href: '../../../img/research/webmpc.png',
    projectType: 'Privacy and Security',
    featured: true,
    pi: null,
    metaDataPresentation: [
      {
        name: 'From Usability to Secure Computing and Back Again',
        href: 'https://www.usenix.org/conference/soups2019/presentation/qin',
      },
    ],
    metaDataPublication: [
      {
        name: 'Role-Based Ecosystem for the Design, Development, and Deployment of Secure Multi-Party Data Analytics Applications',
        href: 'https://ieeexplore.ieee.org/document/8901614',
      },
    ],
  },
  {
    title: 'Noise Score',
    titleDescription: 'Describe and Visualize Your Daily Soundscape',
    description:
      'Research has established that the environmental soundscape has a large impact on our stress levels, our sleep, and our cardiovascular and mental health. The NoiseScore application utilizes smart phone technology to capture both the objective and subjective nature of the sounds you encounter as you go about your daily routine. This information can be utilized to understand the spatial and temporal distribution of sound levels and noise perception in your community both overall and by specific sources such as loud parties, road traffic, or aircraft noise.',
    href: '../../../img/research/noisescore.png',
    projectType: 'Digital Health',
    featured: true,
    pi: (
      <>
        <Link href="https://vivo.brown.edu/display/edwalker" color="#567dbd">
          Dr. Erica Walker,{' '}
        </Link>
        <Text as="span">
          Assistant Professor of Epidemiology, Brown University
        </Text>
      </>
    ),
    metaDataPresentation: [
      {
        name: '',
        href: '',
      },
    ],
    metaDataPublication: [
      {
        name: '',
        href: '',
      },
    ],
  },
  {
    title: 'ASL-LEX',
    titleDescription: '',
    description: '',
    href: '../../../img/research/asl.jpg',
    projectType: 'Data Science',
    featured: false,
    pi: (
      <>
        <Link
          href="https://www.bu.edu/wheelock/profile/naomi-caselli/"
          color="#567dbd"
        >
          Dr.Naomi Caselli,{' '}
        </Link>
        <Text as="span">Assistant Professor, Wheelock</Text>
      </>
    ),
    metaDataPresentation: [
      {
        name: '',
        href: '',
      },
    ],
    metaDataPublication: [
      {
        name: '',
        href: '',
      },
    ],
  },
  {
    title: 'ORACLES',
    titleDescription: 'ORACLES',
    description: '',
    href: '../../../img/research/oracles.png',
    projectType: 'Data Science',
    featured: false,
    pi: (
      <>
        <Link
          href="https://www.bu.edu/hic/profile/mayank-varia/"
          color="#567dbd"
        >
          Dr.Mayank Varia,{' '}
        </Link>
        <Text as="span">Research Associate Professor, Computer Science</Text>
      </>
    ),
    metaDataPresentation: [
      {
        name: '',
        href: '',
      },
    ],
    metaDataPublication: [
      {
        name: '',
        href: '',
      },
    ],
  },
];

export const OLD_PROJECTS_LIST: Array<ProjectInfo> = [
  {
    title: 'ORACLES',
    titleDescription: 'ORACLES',
    description: '',
    href: '../../../img/research/oracles.png',
    projectType: 'Data Science',
    featured: true,
    pi: (
      <>
        <Link
          href="https://www.bu.edu/hic/profile/mayank-varia/"
          color="#567dbd"
        >
          Dr.Mayank Varia,{' '}
        </Link>
        <Text as="span">Research Associate Professor, Computer Science</Text>
      </>
    ),
    metaDataPresentation: [
      {
        name: '',
        href: '',
      },
    ],
    metaDataPublication: [
      {
        name: '',
        href: '',
      },
    ],
  },
];

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
