import Intro from "./Intro";
import ProjectsSection from "./ProjectsSection";
import projectsArchive from "../../projectsArchive.json";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="main_page">
        <Intro />
        <ProjectsSection projectsArchive={projectsArchive} />
      </div>
    </>
  );
}
