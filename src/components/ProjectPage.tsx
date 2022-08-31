import { Project } from "../types";
import gitHubLinkAvailable from "../utils/gitHubLinkAvailable";
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

  const { name, description, deployed_link} = currentProject;

  return (
    <div id="project_page">
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        <li><a href={deployed_link}>find the project output here</a></li>
        {gitHubLinkAvailable(currentProject) && <li><a href={currentProject.github_link}>find the GitHub repo here</a></li>}
        <li>date created:</li>
        <li>languages used: </li>
        <li>image</li>
      </ul>
    </div>
  );
}
