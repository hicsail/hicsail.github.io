interface PersonInformation {
  name: string;
  picture: string;
  role: string;
  research?: string;
  currentPosition: string;
  outsideLinks: Array<string>;
  projects: Array<string>;
}

interface Alumni extends PersonInformation {
  priorPosition: string;
}

interface ResearchInformation {
  title: string;
  description: string;
  link: string;
}

interface PublicationInformation {
  title: string;
  authors: Array<string>;
  date: string;
  link: string;
}

export const CURRENTMEMBERS_LIST: Array<PersonInformation> = [
  {
    name: 'Jade Smith',
    picture: '../../img/person.jpg',
    role: 'Software Engineer',
    research:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    currentPosition: '...',
    outsideLinks: ['', ''],
    projects: ['https://github.com/hicsail/samsha'],
  },
  {
    name: 'Jade Smith',
    picture: '../../img/person.jpg',
    role: 'Software Engineer',
    research:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

    currentPosition: '...',
    outsideLinks: ['', ''],
    projects: ['https://github.com/hicsail/samsha'],
  },
];

export const ALUMNI_LIST: Array<Alumni> = [
  {
    name: 'John Smith',
    picture: '../../img/fjansen.jpg',
    role: 'Software Engineer',
    priorPosition: 'Software Engineer',
    currentPosition: 'Software Engineer',
    outsideLinks: ['https://www.linkedin.com/in/williamhgates/', ''],
    projects: ['https://github.com/hicsail/samsha'],
  },
  {
    name: 'John Smith',
    picture: '../../img/fjansen.jpg',
    role: 'Graduate Student',
    currentPosition: 'Graduate Student',
    priorPosition: 'Graduate Student',
    outsideLinks: ['https://www.linkedin.com/in/williamhgates/', ''],
    projects: ['https://github.com/hicsail/samsha'],
  },
];

export const PASTRESEARCH_LIST: Array<ResearchInformation> = [
  {
    title: 'Research 1',
    description: 'Research 1 Description',
    link: '',
  },
];

export const ONGOINGRESEARCH_LIST: Array<ResearchInformation> = [
  {
    title: 'Research 1',
    description: 'Research 1 Description',
    link: 'https://www.biorxiv.org/content/10.1101/2020.11.16.385328v1',
  },
];

export const PRESENTATIONS_LIST: Array<PublicationInformation> = [
  {
    title:
      'Role- Based Ecosystem for the Design, Development, and Deployment of Secure Multi-Party Data Analytics Applications',
    authors: ['Andrei Lapets', 'Kinan Dak Albab'],
    date: 'September 2019',
    link: 'https://ieeexplore.ieee.org/document/8901614',
  },
];

export const PUBLICATIONS_LIST: Array<PublicationInformation> = [
  {
    title: '',
    authors: ['', ''],
    date: '',
    link: '',
  },
];
