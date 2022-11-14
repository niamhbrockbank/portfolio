import "./Work.scss";
import projects from "../../projects.json";

export default function Work(): JSX.Element {
  return (
    <>
      <h1 id="archive">WORK</h1>
      <p className="page_description_work">
        This is a showcase of the projects that I am most proud of. It is a
        mixture of front end and full-stack projects. I am passionate about
        continuous learning and strive to learn new skills every day.
      </p>
      <ul id="project_list">
        {projects.map((project) => (
          <li className="project" key={project.id}>
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
        ))}
      </ul>
    </>
  );
}
