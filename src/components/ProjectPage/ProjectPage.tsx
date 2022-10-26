import { useParams } from "react-router-dom";
import { Project } from "../../types";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
// import moment from "moment";

interface ProjectPageProps {
  projectsArchive: Project[];
}

export default function ProjectPage({
  projectsArchive,
}: ProjectPageProps): JSX.Element {
  const { id } = useParams();

  let currentProject: undefined | Project = undefined;
  if (id !== undefined) {
    currentProject = projectsArchive.find((proj) => proj.id === parseInt(id));
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
      
        <FrontEnd project={currentProject}/>
        <BackEnd project={currentProject}/>
        
        <h1>Tags</h1>
        <ul>
          {currentProject.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>

        {/*, presentation, creative coding*/}
      </div>
    </div>
  );
}
