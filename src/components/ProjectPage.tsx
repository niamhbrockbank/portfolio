import { useParams } from "react-router-dom";
import { Project } from "../types";
// import moment from "moment";

interface ProjectPageProps {
  projectsArchive: Project[];
}

export default function ProjectPage({
  projectsArchive,
}: ProjectPageProps): JSX.Element {
  const { id } = useParams()

  let currentProject : undefined | Project = undefined
  if (id !== undefined){
    currentProject = projectsArchive.find(
      (proj) => proj.id === parseInt(id)
    );
  }

  if (currentProject === undefined) {
    return <h1>Project cannot be found.</h1>;
  }

  const { name, description } = currentProject;

  return (
    <div className="main_page">
    <div id="project_page">
      <h1>{name}</h1>
      <p>{description}</p>
      {/* <li>date created: {moment(date_created).format("MMM Do YYYY")}</li> */}

      {currentProject.front_end !== undefined && (
        <>
          {/* <h1>Front End</h1> */}
          <ul>
            <li>
              <a
                href={currentProject.front_end.deployed_link}
                target="_blank"
                rel="noreferrer"
              >
                Find the deployed site here
              </a>
            </li>
            <li>
              <a
                href={currentProject.front_end.github_link}
                target="_blank"
                rel="noreferrer"
              >
                Find the GitHub repository here
              </a>
            </li>
            <li>tags:
              <ul>
                {currentProject.tags.map((tag, i) => <li key={i}>{tag}</li>)}
              </ul>
            </li>
          </ul>
        </>
      )}

      {/*back end, presentation, creative coding*/}
    </div>
    </div>
  );
}
