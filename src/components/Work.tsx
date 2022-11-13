import { Project } from "../types";
import ProjectsSection from "./Home/ProjectsSection";

interface IProps {
    projectsArchive: Project[];
  }

export default function Work({projectsArchive} : IProps):JSX.Element{
    return <ProjectsSection projectsArchive={projectsArchive} />
}