import { Project } from "../types";

interface ProjectPageProps {
  currentPage: number;
  projectsArchive: Project[]
}

export default function ProjectPage({
  currentPage, projectsArchive
}: ProjectPageProps): JSX.Element {

  const currentProject = projectsArchive.find((proj) => proj.id === currentPage);

  if (currentProject === undefined) {
    return <h1>Project cannot be found.</h1>;
  }

  const { name, description } = currentProject;

  return (
    <div id="project_page">
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {/* <a href={deployed_link}>find the project output here</a> */}
        </li>
        {/* {currentProject.github_link && (
          <li>
            <a href={currentProject.github_link}>find the GitHub repo here</a>
          </li>
        )} */}
        <li>date created:</li>
        <li>languages used: </li>
        <li>image</li>
      </ul>
    </div>
  );
}
