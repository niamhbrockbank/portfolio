import { useEffect, useState } from "react";
import Archive from "./Archive";
import FeaturedProjects from "./FeaturedProjects";
import {Project} from '../types'

interface ProjectsSectionProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProjectsSection({
  setCurrentPage,
}: ProjectsSectionProps): JSX.Element {
  const [projectsArchive, setProjectsArchive] = useState<Project[]>([{name : "loading", description : "loading project archive"}])

  useEffect( () => {
    async function fetchProjects(){
      const response = await fetch('https://niamh-brockbank.herokuapp.com/')
      const jsonBody : Project[] = await response.json()
      setProjectsArchive(jsonBody)
    }

    fetchProjects()
  }, [])

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
