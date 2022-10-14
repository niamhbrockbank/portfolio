import { Link } from "react-router-dom";
import { Project } from "../../types";

interface ArchiveProps {
  projectsArchive: Project[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Archive({
  projectsArchive,
  setCurrentPage,
}: ArchiveProps): JSX.Element {
  return (
    <>
      <h1 id="archive_title">Archive</h1>
      <ul id="archive_list">
        {projectsArchive.map((project) => (
          <Link to='/project' key={projectsArchive.indexOf(project)}>
          <li
            className="archive_project"
            
            // style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => setCurrentPage(project.id)}
          > 
            <div id="archive_project_details">
              <h2 className="archive_project_title">
                {project.name.toLowerCase()}
              </h2>
              <p className="archive_project_description">
                {project.description.length < 300
                  ? project.description
                  : `${project.description.slice(0, 297)}...`}
              </p>
            </div>
          </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
