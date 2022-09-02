export interface Project {
  id: number;
  name: string;
  description: string;
  image?: string;
  github_link?: string;
  deployed_link?: string;
  featured?: boolean;
  date_created?: Date;
}

export interface Feature {
  name: string;
  link: string;
}
