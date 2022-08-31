import { Project } from "../types";
import goToDeployedProject from "../utils/goToDeployedProject";
import goToGitHubRepo from "../utils/goToGitHubRepo";

interface ArchiveProps {
  projectsArchive: Project[];
}

export default function Archive({
  projectsArchive,
}: ArchiveProps): JSX.Element {
  return (
    <>
      <h1 id="archive_title">Archive</h1>
      <ul id="archive_list">
        {projectsArchive.map((project) => (
          <li
            className="archive_project"
            key={projectsArchive.indexOf(project)}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => goToDeployedProject(project)}
          >
            <div id="archive_project_details">
              <h2
                className="archive_project_title"
                onClick={() => goToGitHubRepo(project)}
              >
                {project.name.toLowerCase()}
              </h2>
              <p className="archive_project_description">
                {project.description.length < 100
                  ? project.description
                  : `${project.description.slice(0, 97)}...`}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
