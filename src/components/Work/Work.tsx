import "./Work.scss";
import projects from "../../projects.json";
import ProjectCard from "./ProjectCard";

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
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </>
  );
}
