import { ChakraComponent } from '@chakra-ui/react';
import { ReactElement } from 'react';

export interface AlumniInformation {
  Alumni_ID: number;
  Name: string;
  SAIL_Position: string;
  Post_SAIL: string;
}

export interface PersonInformation {
  name?: string;
  picture?: string;
  role?: string;
  research?: string;
  outsideLinks: Array<OutsideLink>;
  projects?: Array<Project> | null;
  bio?: string;
}

export interface OutsideLink {
  name: string;
  href: string;
}

export interface Project {
  name: string;
  href: string;
}

export interface ProjectInformation {
  icons: Array<string>;
  title: string;
  text: string;
  pi: ReactElement;
}

export interface ProjectInfo {
  title: string;
  titleDescription: string;
  description: string;
  href: string;
  pi: ReactElement | null;
  metaData: Array<OutsideLink>;
}

export type ResearchInformation = {
  title: string;
  titleDescription: string;
  description: string;
  href: string;
  pi: ReactElement | null;
};

export type PublicationInformation = {
  title: string;
  authors: string;
  date: string;
  proceeding?: string;
  href: string;
  location?: string;
  firstOfYear: boolean;
  link?: string;
};

export interface InternTestimonial {
  name: string;
  href?: string;
  quote: string;
  season: string;
}
