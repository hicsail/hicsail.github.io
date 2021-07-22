export interface InternInformation {
  Intern_ID: number;
  Name: string;
  Prior_Position: string;
  Post_Internship: string;
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
  investigatorName: string;
  investigatorTitle: string;
  investigatorLink: string;
  interns: string;
}

export type ResearchInformation = {
  title: string;
  titleDescription: string;
  description: string;
  href: string;
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
