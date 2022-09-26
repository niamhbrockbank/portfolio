import { Project } from "../types";
// import moment from "moment";

interface ProjectPageProps {
  currentPage: number;
  projectsArchive: Project[];
}

export default function ProjectPage({
  currentPage,
  projectsArchive,
}: ProjectPageProps): JSX.Element {
  const currentProject = projectsArchive.find(
    (proj) => proj.id === currentPage
  );

  if (currentProject === undefined) {
    return <h1>Project cannot be found.</h1>;
  }

  const { name, description } = currentProject;

  if (currentProject.front_end === undefined) {
    return <p>no front-end</p>;
  }
  return (
    <div id="project_page">
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        {currentProject.front_end.deployed_link && (
          <li>
            <a href={currentProject.front_end.deployed_link}>
              find the project output here
            </a>
          </li>
        )}

        {currentProject.front_end.github_link && (
          <li>
            <a href={currentProject.front_end.github_link}>
              find the GitHub repo here
            </a>
          </li>
        )}
        {/* <li>date created: {moment(date_created).format("MMM Do YYYY")}</li> */}
      </ul>
    </div>
  );
}
