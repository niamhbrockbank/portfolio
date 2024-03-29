import { BoxArrowUpRight, Github } from "react-bootstrap-icons";
import { Project } from "../../types";

interface IProps {
  project: Project;
}

export default function ProjectCard({ project }: IProps): JSX.Element {
  return (
    <>
      <li className="project">
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
                <BoxArrowUpRight
                  className="project_link"
                  onClick={() =>
                    window.open(project.front_end?.deployed_link, "_blank")
                  }
                />
              )}
              {project.front_end?.github_link !== "undefined" && (
                <Github
                  className="project_link"
                  onClick={() =>
                    window.open(project.front_end?.github_link, "_blank")
                  }
                />
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
