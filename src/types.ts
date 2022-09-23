export interface Project {
  id: number;
  name: string;
  description: string;
  image?: string;
  github_link?: string;
  deployed_link?: string;
  featured?: boolean;
  date_created?: string;
}

export interface Feature {
  name: string;
  link: string;
}

export interface NewProject {
  id : number;
  name : string;
  description : string;
  backend? : {
    API_documentation : string;
    table_schema : [];
    table_schema_diagram : string;
    github_link : string;
    deployed_link?: string;
  };
  frontend? : {
    UI_wireframe : string;
    react_component_tree : string;
    images: string[];
    video_runthrough : string;
    github_link : string;
    deployed_link?: string;
  };
  creative_coding? : {
    images : string;
    intentions : string;
    deployed_link?: string;
  };
  presentation? : {
    slides : string;
    video_runthrough? : string;
  }
}