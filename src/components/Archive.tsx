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
            style={{ backgroundImage: `url(${project.image})` }}
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
