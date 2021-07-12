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
