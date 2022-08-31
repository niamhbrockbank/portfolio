import { Project } from "../types";
import projectsArchive from "./projectsArchive.json";

interface ProjectPageProps {
  currentPage: string;
}

export default function ProjectPage({
  currentPage,
}: ProjectPageProps): JSX.Element {
  const currentProject: Project | undefined = projectsArchive.find(
    (proj) => proj.name === currentPage
  );

  if (currentProject === undefined) {
    return <h1>Project cannot be found.</h1>;
  }

  const { name, description, deployed_link, github_link } = currentProject;

  return (
    <div id="project_page">
      <h1>{name}</h1>
      <ul>
        <li>{description}</li>
        <li>deployed app: {deployed_link}</li>
        {github_link && <li>github repo: {github_link}</li>}
        <li>date</li>
        <li>languages used</li>
        <li>image</li>
      </ul>
    </div>
  );
}
