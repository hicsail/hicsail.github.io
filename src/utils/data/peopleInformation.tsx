import { InternTestimonial, PersonInformation } from '../../types/types';

export const CURRENTMEMBERS_LIST: Array<PersonInformation> = [
  {
    name: 'Jeff Simeon',
    picture: '../../img/team/Jeff.jpg',
    role: 'Assistant Director, Operations',
    outsideLinks: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jeffsimeon' },
      {
        name: 'BU Profile',
        href: 'https://www.bu.edu/hic/profile/jeff-simeon/',
      },
    ],
    projects: null,
    bio: 'Jeff Simeon is a product specialist that has launched software in his own startups and inside institutions. In his current position, Jeff collaborates with researchers across Boston University. Jeff guides the engineering team through start, creation and launch of capable research software. He looks forward to solving your research problems!    ',
  },
  {
    name: 'Shirene Cao',
    picture: '../../img/team/shirene.jpg',
    role: 'Software Engineer',
    outsideLinks: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/xinyun-cao' },
    ],
    projects: [{ name: 'ASL-LEX', href: 'https://github.com/ASL-LEX/asl-lex' }],
    bio: 'Shirene enjoys building web apps to support research efforts in digital health and data science and is currently the project lead for a series of applications used to understand sign language acquisition. She is currently pursuing a Master’s Degree in Computer Science.',
  },
  {
    name: 'Dany Fu',
    picture: '../../img/team/dany.jpg',
    role: 'Senior Software Engineer',
    research: '',
    outsideLinks: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/danyfu' },
    ],
    projects: [
      { name: 'ORACLES', href: 'https://github.com/hicsail/ORACLES/tree/main' },
      {
        name: 'OT2-SARS-CoV2',
        href: 'https://github.com/DAMPLAB/OT2-SARS-CoV2',
      },
    ],
    bio: 'Passionate about molecular biology and genetics research, Dany applies her full stack software expertise to domains such as synthetic biology, neuroscience, bioinformatics, and infectious disease. Dany is concurrently pursing a MS in Biology at Boston University',
  },
  {
    name: 'Arezoo Sadeghi',
    picture: '../../img/team/arezoo.jpg',
    role: 'Software Engineer',
    research: '',
    outsideLinks: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/arezoo-sadeghi-41b24a139',
      },
    ],
    projects: [{ name: 'samsha', href: 'https://github.com/hicsail/samsha' }],
    bio: "As a full stack software engineer, Arezoo loves working with different technology stacks and frameworks to build optimal software solutions and analytical tools for solving problems in variety of domains such as data science, digital health and synthetic biology. She got her master's degree in computer science from Boston University prior to joining SAIL",
  },
  {
    name: 'Vidya Akavoor',
    picture: '../../img/team/vidya.png',
    role: 'Software Engineer',
    research: '',
    outsideLinks: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vidya-akavoor',
      },
    ],
    projects: [{ name: 'ABLE', href: 'https://github.com/hicsail/im-well2' }],
    bio: 'Vidya is enthusiastic about being able to bring software engineering skills to various research areas including synthetic biology, digital/mobile health, cybersecurity, and cloud computing.  She would like to bring linguistic and music cognition research into this umbrella, and is pursuing a master’s degree in Artificial Intelligence at Boston University in an effort to do so.',
  },
  {
    name: 'Ammar Ahmad',
    picture: '../../img/team/Ammar.jpg',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: "Ammar is passionate about solving problems using software and technology. He loves to apply his skills to build software that creates a positive impact. He's been working in the areas of Artificial Intelligence, Data science and web development and is currently pursuing a Masters in Artificial Intelligence at BU.",
  },
  {
    name: 'Christopher Cho',
    picture: '../../img/team/Chris.jpg',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: 'Chris is passionate about exploring computer science and software engineering. He is currently working on the SAIL website and is pursuing a Bachelor’s degree in Computer Science. ',
  },
  {
    name: 'Glenn Liem',
    picture: '../../img/team/Glenn.jpg',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: "Glenn enjoys writing complex software for novel situations with real-life implications. To this end, Glenn is currently building web applications using secure multi-party computation and zero-knowledge proofs to solve real-world problems using cryptographic techniques, including secure auditing and privacy-preserving data analytics. Glenn is currently pursuing a joint Bachelor's and Master's degree in Computer Science.",
  },
  {
    name: 'Nicholas Goutermout',
    picture: '../../img/team/Nicholas.jpg',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: 'Nicholas is passionate about software engineering and computer science research. He enjoys solving complex problems with his unique skill set in machine learning, python, java, and application development. He is currently pursuing a Master’s Degree in Artificial Intelligence.',
  },
  {
    name: 'Nicholas  Hall',
    picture: '../../img/team/Nick.jpg',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: 'Nick focuses on building data analytics in the contexts of linguistics and digital health. He aims to use natural language processing and language generation in order to better understand digital interactions. Nick is a rising junior at Boston University majoring in Computer Science.',
  },
  {
    name: 'Taesung Yoon',
    picture: '../../img/team/Taesung.jpg',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: 'Taesung is passionate in exploring the various opportunities that web development can offer. He has worked on mobile game development and web applications. Currently pursuing a BA in Computer Science, he hopes to find ways to bring a more accessible and inclusive user experience for everyone.',
  },
];

export const INTERNTESTIMONIALS_LIST: Array<InternTestimonial> = [
  {
    name: 'Raj Vipani',
    href: '../../img/team/Raj.jpg',
    quote:
      'Working at SAIL exposed me to a wide range of modern technologies. While working on asl-lex 3.1 and a bit on 3.0, I was required to learn AngularJS, brush up knowledge on TypeScript, HTML/CSS, work on python scripts and work on cloud technologies such as Firebase. Being exposed and seeing them implemented as a real-world project was great for me. Interns also closely work with the PIs of the projects. Lastly, the team at SAIL is open, approachable, and helpful.',
    season: 'Summer 2021',
  },
  {
    name: 'Tanner Braun',
    href: '../../img/team/Tanner.jpg',
    quote:
      'Working here at SAIL has provided me with a great space to grow as a developer and get more experience with the different technologies I wanted to work with',
    season: '',
  },
  {
    name: 'Gagandeep Kang',
    href: '../../img/team/Gagandeep.jpg',
    quote:
      "One of the greatest parts of being an intern at SAIL is the environment. I didn’t feel any barriers in reaching out to other members of the team. The culture isn’t hierarchical like a normal tech company. This makes you feel like a valuable, contributing member. I also felt that I was making a difference in the world. At the end of the day, SAIL's building software projects that have a purpose in the real world outside of financial incentives",
    season: '',
  },
  {
    name: 'Xuan Hy Nguyen',
    href: '../../img/team/Louis.jpg',
    quote:
      'The first and foremost thing I enjoyed about SAIL was the communication. Being able to talk and explain high concept ideas with not just your mentor and peers working alongside your project, but also presenting that idea to others people in different project areas.',
    season: '',
  },
];
