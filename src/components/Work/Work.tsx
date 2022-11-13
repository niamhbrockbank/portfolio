import { Project } from "../../types";
import ProjectsSection from "./ProjectsSection";
import './Work.scss'

interface IProps {
    projectsArchive: Project[];
  }

export default function Work({projectsArchive} : IProps):JSX.Element{
    return <ProjectsSection projectsArchive={projectsArchive} />
}