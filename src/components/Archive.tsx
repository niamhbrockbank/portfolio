import { Project } from "../types";
import goToGitHubRepo from "../utils/goToGitHubRepo";

export default function Archive(): JSX.Element {
  const archiveProjects: Project[] = [
    {
      name: "to-do app",
      description:
        "full-stack app that allows a user to insert and delete tasks.",
      image: "no image yet",
      github_link: "https://github.com/niamhbrockbank/to-do-app-front-end",
    },
    {
      name: "tv show picker",
      description:
        "front-end app that fetches tv show data from an API. User can navigate between shows with a dropdown and filter shows and episodes using a search bar",
      image: "no image yet",
      github_link: "https://github.com/Wilrosmi/tv-shows",
    },
    {
      name: "baby names picker",
      description: "front-end app that can be used to choose baby names",
      image: "no image yet",
      github_link: "https://github.com/niamhbrockbank/baby-names-react",
    },
  ];

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
