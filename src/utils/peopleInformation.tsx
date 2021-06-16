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
