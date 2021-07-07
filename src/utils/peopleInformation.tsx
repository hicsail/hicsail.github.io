export const CURRENTMEMBERS_LIST: Array<PersonInformation> = [
  {
    name: 'Jeff Simeon',
    picture: '../../img/team/jeff-simeon.jpg',
    role: 'Assistant Director, Operations',
    outsideLinks: [
      { name: 'Linked In', href: 'https://www.linkedin.com/in/jeffsimeon' },
      {
        name: 'BU Profile',
        href: 'https://www.bu.edu/hic/profile/jeff-simeon/',
      },
    ],
    projects: null,
    bio: '',
  },
  {
    name: 'Shirene Cao',
    picture: '../../img/team/shirene-cao.jpg',
    role: 'Software Engineer',
    outsideLinks: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/xinyun-cao' },
    ],
    projects: [{ name: 'ASL-LEX', href: 'https://github.com/ASL-LEX/asl-lex' }],
    bio: '',
  },
  {
    name: 'Dany Fu',
    picture: '../../img/team/dany-fu.jpg',
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
    picture: '../../img/team/arezoo-sadeghi.jpg',
    role: 'Software Engineer',
    research: '',
    outsideLinks: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/arezoo-sadeghi-41b24a139',
      },
    ],
    projects: [{ name: 'samsha', href: 'https://github.com/hicsail/samsha' }],
    bio: '',
  },
  {
    name: 'Vidya Akavoor',
    picture: '../../img/team/vidya-akavoor.jpg',
    role: 'Software Engineer',
    research: '',
    outsideLinks: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vidya-akavoor',
      },
    ],
    projects: [{ name: 'ABLE', href: 'https://github.com/hicsail/im-well2' }],
    bio: '',
  },
  {
    name: 'Ammar Ahmad',
    picture: '',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: '',
  },
  {
    name: 'Christopher Cho',
    picture: '',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: '',
  },
  {
    name: 'Glenn Liem',
    picture: '',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: '',
  },
  {
    name: 'Nicholas Goutermout',
    picture: '',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: '',
  },
  {
    name: 'Nicholas Hall',
    picture: '',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: '',
  },
  {
    name: 'Taesung Yoon',
    picture: '',
    role: 'Software Engineer Intern',
    research: '',
    outsideLinks: [],
    projects: [],
    bio: '',
  },
];

interface PersonInformation {
  name?: string;
  picture?: string;
  role?: string;
  research?: string;
  outsideLinks: Array<OutsideLink>;
  projects?: Array<Project> | null;
  bio?: string;
}

interface OutsideLink {
  name: string;
  href: string;
}

interface Project {
  name: string;
  href: string;
}

// interface Alumni extends PersonInformation {
//   priorPosition: string;
//   currentPosition: string;
// }

// export const ALUMNI_LIST: Array<Alumni> = [
//   {
//     name: 'Frederick Jansen',
//     priorPosition: 'Interim Director',
//     currentPosition: 'Chief Technology Officer & Co-Founder at Nth Party, Ltd',
//     outsideLinks: [
//       { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jansenfrederick' },
//     ],
//   },
// ];
