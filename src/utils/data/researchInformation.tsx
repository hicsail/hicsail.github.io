import { ResearchInformation, PublicationInformation } from '../../types/types';

export const ONGOINGRESEARCH_LIST: Array<ResearchInformation> = [
  {
    title: 'COVID; Boston University',
    popTitle: 'Clinical Testing Lab',
    description:
      'To repopulate our three campuses, resume residential learning and student activities, and reopen research labs and clinics, Boston University took a comprehensive, multipronged approach to protecting the health and safety of our community and the public at large. At the center of this effort is testing. Once it became clear the novel coronavirus would persist into the fall of 2020, the University rapidly stood up a clinical testing lab. In addition to a trained staff, the BU Clinical Testing Laboratory is using specialized robots to accelerate testing capacity and, importantly, return results by the end of the next day. SAIL staff was instrumental in developing the automated software and data pipeline central to the testing process.',
    href: '../../../img/research/covid.png',
  },
  {
    title: 'Web MPC; Boston Women’s Workforce Council (BWWC logo)',
    popTitle: 'Secure Compensation Analytics for the City of Boston',
    description:
      'In support of the Boston Women’s Workforce Council and its mission to advance salary equity among Boston employers as part of the 100% Talent Compact, SAIL staff and student developers built a secure multi-party computation web application that allows statistical data pertaining to compensation levels across genders and demographics to be collected from over 250 participating employer organizations, such as State Street Corporation and Putnam Investments, without requiring any organization to reveal its confidential data. This platform is unique in that it allows real-world organizations to use what is still largely studied as a theoretical technique, enabling analyses that would have been otherwise impossible to do while preserving the confidentiality of the participants.',
    href: '../../../img/research/webmpc.png',
  },
  {
    title: 'NLP; PI - Cathie Jo Martin, Professor of Political Science',
    popTitle: 'Natural Language Processing for Political Science',
    description:
      'SAIL staff and student developers are helping at Boston University, to collect natural language data sets consisting of Danish and British fiction literature from third party sources and services, and to identify and apply appropriate machine learning techniques to these corpora. This work supports Prof. Martin’s goal of understanding deep cultural differences in views toward education as they can be observed in coming-of-age novels in Britain and Denmark. This work represents a part of a broader effort to advance the digital humanities by making computational techniques more accessible to researchers in the social sciences.',
    href: '../../../img/research/nlp.png',
  },
  {
    title:
      'Noise Score; PI-Dr. Erica Walker, Assistant Professor of Epidemiology, Brown University',
    popTitle: 'Describe and visualize your daily soundscape',
    description:
      'Research has established that the environmental soundscape has a large impact on our stress levels, our sleep, and our cardiovascular and mental health. The NoiseScore application utilizes smart phone technology to capture both the objective and subjective nature of the sounds you encounter as you go about your daily routine. This information can be utilized to understand the spatial and temporal distribution of sound levels and noise perception in your community both overall and by specific sources such as loud parties, road traffic, or aircraft noise.',
    href: '../../../img/research/noisescore.png',
  },
  {
    title: 'ASL-LEX; PI – Dr.Naomi Caselli, Assistant Professor, Wheelock ',
    popTitle: 'ASL-LEX; PI – Dr.Naomi Caselli, Assistant Professor, Wheelock',
    description: '',
    href: '../../../img/research/asl.png',
  },
  {
    title:
      'ORACLES; PI- Dr.Mayank Varia, Research Associate Professor, Computer Science',
    popTitle:
      'ORACLES; PI- Dr.Mayank Varia, Research Associate Professor, Computer Science',
    description: '',
    href: '../../../img/research/oracles.png',
  },
];

export const PASTRESEARCH_LIST: Array<ResearchInformation> = [
  {
    title: 'Hey Charlie;',
    popTitle: 'Combating opioid addiction',
    description:
      'Hey,Charlie is a non-invasive mobile behavioral modification platform designed to help individuals in recovery rebuild their social environments as well as enrich relationships with healthcare providers in order to build more targeted recovery strategies. This is realized through a series of automatic behavioral nudges on a mobile device that urge the patient to avoid communication with people and places who are unhealthy and negative to their recovery and to pursue and enrich relationships with people and places that are positive to their recovery. This information is then aggregated and conveyed to the primary recovery healthcare provider (therapist, social worker, clinician, etc.) in a secure and protected manner. Using data-driven predictive algorithms, patient notifications are tailored to individual behavior patterns.',
    href: '../../../img/research/charlie.png',
  },
  {
    title: 'DASH; PI – Dr.Devin Mann, Associate Professor of Medicine ',
    popTitle:
      'Dietary Approaches to Stopping Hypertension (DASH) for Health App',
    description:
      'SAIL worked with BU Medical Campus IT to design and build a cross-platform mobile application for Devin Mann, Associate Professor of Medicine at BU and an Associate Chief Medical Information Officer at Boston Medical Center. The app enables users to track their food consumption by tapping tiles that correspond to the eight components of a healthy diet. The app connects via Bluetooth to a blood pressure monitor, scale, and pedometer; it also allows users to connect with health coaches through a messaging function. This work demonstrates how a resource like SAIL can enable a successful and sustained mobile health research ecosystem at BU. ',
    href: '../../../img/research/dash.png',
  },
];

export const PRESENTATIONS_LIST: Array<PublicationInformation> = [
  {
    title:
      'Role- Based Ecosystem for the Design, Development, and Deployment of Secure Multi-Party Data Analytics Applications',
    authors:
      'Andrei Lapets, Kinan Dak Albab, Rawane Issa, Lucy Qin, Mayank Varia, Azer Bestavros, Frederick Jansen',
    date: 'September 23, 2019 00:00:00',
    proceeding: 'IEEE Secure Development Conference (SecDev).',
    href: '../../../img/publications/role-based-ecosystem.png',
    firstOfYear: true,
    link: 'https://ieeexplore.ieee.org/document/8901614',
  },
  {
    title: 'From Usability to Secure Computing and Back Again',
    authors:
      'Lucy Qin, Andrei Lapets, Frederick Jansen, Peter Flockhart, Kinan Dak Albab, Ira Globus-Harris, Shannon Roberts, Mayank Varia',
    date: 'August 12, 2019 00:00:00',
    proceeding: '15th Symposium on Usable Privacy and Security (SOUPS)',
    href: '../../../img/publications/from-usability-to-secure-computing.png',
    firstOfYear: false,
    link: 'https://www.usenix.org/conference/soups2019/presentation/qin',
  },
  {
    title:
      'ExerciseCheck: a scalable platform for remote physical therapy deployed as a hybrid desktop and web application',
    authors:
      'Shreya Pandit, San Tran, Yiwen Gu, Elham Saraee, Frederick Jansen, Saurabh Singh, Shirene Cao, Arezoo Sadeghi, Eugenia Shandelman, Terry Ellis, Margrit Betke',
    date: 'June 5, 2019 00:00:00',
    proceeding:
      '12th ACM International Conference on Pervasive Technologies Related to Assistive Environments, PETRA',
    href: '../../../img/publications/exercise-check.png',
    firstOfYear: false,
    link: 'https://dl.acm.org/doi/10.1145/3316782.3321537',
  },
  {
    title:
      'Accessible Privacy-Preserving Web-Based Data Analysis for Assessing and Addressing Economic Inequalities',
    authors:
      'Andrei Lapets, Frederick Jansen, Kinan Dak Albab, Rawane Issa, Lucy Qin, Mayank Varia, Azer Bestavros',
    date: 'June 20, 2018 00:00:00',
    proceeding:
      '1st ACM SIGCAS Conference on Computing and Sustainable Societies',
    href: '../../../img/publications/accessible-privacy-preserving-web.png',
    firstOfYear: true,
    link: 'https://dl.acm.org/doi/10.1145/3209811.3212701',
  },
  {
    title:
      'Reaching Smokers Who are Not Motivated to Quit: A Mobile App to Enhance Well- being and Encourage Cessation',
    authors:
      'Belinda Borrelli, Kiera Bartlett, Greg Frasco, Alison Wearden, Frederick Jansen, Christopher Armitage, Andrei Lapets, Bethany Gill, Amie Gal',
    date: 'April 1, 2018 00:00:00',
    proceeding: 'The 39th Annual Meeting Society of Behavioral Medicine (SBM)',
    href: '../../../img/publications/reaching-smokers.png',
    firstOfYear: false,
    link: 'https://www.bu.edu/pdc/2018/06/11/reaching-smokers-who-are-not-motivated-to-quit-a-mobile-app-to-enhance-well-being-and-encourage-cessation/',
  },
  {
    title: 'Brief Announcement: Federated Code Auditing and Delivery for MPC',
    authors: 'Frederick Jansen, Kinan Dak Albab, Andrei Lapets, Mayank Varia',
    date: 'October 7, 2017 00:00:00',
    proceeding:
      'Stabilization, Safety, and Security of Distributed Systems. SSS 2017',
    href: '../../../img/publications/brief-announcement-federated.png',
    firstOfYear: true,
    link: 'https://link.springer.com/chapter/10.1007/978-3-319-69084-1_20',
  },
  {
    title: 'Secure MPC for Analytics Deployed as a Lightweight Web Application',
    authors:
      'Andrei Lapets, Nikolaj Volgushev, Azer Bestavros, Frederick Jansen, and Mayank Varia',
    date: 'November 1, 2016 00:00:00',
    proceeding: '1st IEEE Cybersecurity Development Conference (SecDev).',
    href: '../../../img/publications/secure-mpc.png',
    firstOfYear: true,
    link: 'https://open.bu.edu/handle/2144/21786',
  },
];

export const PUBLICATIONS_LIST: Array<PublicationInformation> = [
  {
    title:
      'Comprehensive generation, visualization, and reporting of quality control metrics for single-cell RNA sequencing data',
    authors:
      'Rui Hong, Yusuke Koga, Shruthi Bandyadka, Anastasia Leshchyk, Zhe Wang, Salam Alabdullatif, Yichen Wang, Vidya Akavoor, Xinyun Cao, Irzam Sarfraz, Frederick Jansen, W.Evan Johnson, Masanao Yajima, Joshua D. Campbell',
    date: 'February 14, 2021 00:00:00',
    location: 'bioRxiv 10.1101/2020.11.16.385328 version 2. February 2021',
    href: '../../../img/publications/comprehensive-generation.jpg',
    firstOfYear: true,
    link: 'https://www.biorxiv.org/content/10.1101/2020.11.16.385328v1',
  },
  {
    title:
      'Standardizing Automated DNA Assembly: Best Practices, Metrics, and Protocols Using Robots',
    authors:
      'David Walsh, Marilene Pavan, Luis Ortiz, Scott Wick, Johanna Bobrow, Nicholas Guido, Sarah Leinicke, Dany Fu, Shreya Pandit, Lucy Qin, Peter Carr, Douglas Densmore',
    date: 'February 15, 2019 00:00:00',
    location: 'SLAS Technology: Translating Life Sciences Innovation',
    href: '../../../img/publications/standardizing-automated-dna.png',
    firstOfYear: true,
    link: 'https://pubmed.ncbi.nlm.nih.gov/30768372/',
  },
  {
    title:
      'Web-Based Computerized Adaptive Testing Via an Open-Source Platform',
    authors: 'Shreya Pandit, Frederick Jansen, Andrei Lapets, Mary Slavin',
    date: 'Feb 1, 2019 00:00:00',
    location: 'Value in Health, Volume 21, S54',
    href: '../../../img/publications/web-based-computerized-adaptive-testing.png',
    firstOfYear: false,
    link: 'https://www.valueinhealthjournal.com/article/S1098-3015(18)30749-6/fulltext',
  },
];
