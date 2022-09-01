import { useEffect, useState } from "react";
import Archive from "./Archive";
import FeaturedProjects from "./FeaturedProjects";
import {Project} from '../types'

interface ProjectsSectionProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProjectsSection({
  setCurrentPage,
}: ProjectsSectionProps): JSX.Element {
  const [projectsArchive, setProjectsArchive] = useState<Project[]>([{id : 0, name : "loading", description : "loading project archive"}])

  useEffect( () => {
    async function fetchProjects(){
      const response = await fetch('https://niamh-brockbank.herokuapp.com/')
      const jsonBody : Project[] = await response.json()
      setProjectsArchive(jsonBody)
    }

    fetchProjects()
  }, [projectsArchive])

  return (
    <>
      <FeaturedProjects projectsArchive={projectsArchive} />
      <Archive
        projectsArchive={projectsArchive}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
