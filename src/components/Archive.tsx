import goToGitHubRepo from "../utils/goToGitHubRepo";
import archiveProjects from "./archiveProjects.json";

export default function Archive(): JSX.Element {
  return (
    <>
      <h1 id="archive_title">Archive</h1>
      <ul id="archive_list">
        {archiveProjects.map((project) => (
          <li
            className="archive_project"
            key={archiveProjects.indexOf(project)}
          >
            <h2
              className="archive_project_title"
              onClick={() => goToGitHubRepo(project)}
            >
              {project.name.toLowerCase()}
            </h2>
            <p className="archive_project_description">
              {project.description.length < 140
                ? project.description
                : `${project.description.slice(0, 137)}...`}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
