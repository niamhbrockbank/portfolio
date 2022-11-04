// import { Link } from "react-router-dom";
import { Project } from "../../types";

interface ArchiveProps {
  projectsArchive: Project[];
}

export default function Archive({
  projectsArchive,
}: ArchiveProps): JSX.Element {
  return (
    <>
      <h1 id="archive">Projects Archive</h1>
      <ul id="archive_list">
        {projectsArchive.map((project) => (
          // <Link to={`/${project.id}`} key={project.id}>
          <li
            className="archive_project"
            key={project.id}
            // style={{ backgroundImage: `url(${project.image})` }}
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
                <div className="tags_div">
                  <ul className="tags">
                    {project.tags.map((tag) => (
                      <li key={project.tags.indexOf(tag)} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="project_links">
                  {project.front_end?.deployed_link !== "undefined" && (
                    <img
                      className="project_link"
                      src="./img/box-arrow-up-right.svg"
                      alt="link to deployed project"
                      onClick={() =>
                        window.open(project.front_end?.deployed_link, "_blank")
                      }
                    />
                  )}
                  {project.front_end?.github_link !== "undefined" && (
                    <img
                      className="project_link"
                      src="./img/github.svg"
                      alt="link to github repo"
                      onClick={() =>
                        window.open(project.front_end?.github_link, "_blank")
                      }
                    />
                  )}
                </div>
                </div>
                
              </div>
          </li>
          // </Link>
        ))}
      </ul>
    </>
  );
}
