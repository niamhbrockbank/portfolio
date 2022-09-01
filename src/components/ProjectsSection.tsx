import { useEffect } from "react";
import Archive from "./Archive";
import FeaturedProjects from "./FeaturedProjects";
import { Project } from "../types";

interface ProjectsSectionProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  projectsArchive: Project[];
  setProjectsArchive: React.Dispatch<React.SetStateAction<Project[]>>;
}

export default function ProjectsSection({
  setCurrentPage,
  projectsArchive,
  setProjectsArchive,
}: ProjectsSectionProps): JSX.Element {
  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("https://niamh-brockbank.herokuapp.com/");
      const jsonBody: Project[] = await response.json();
      setProjectsArchive(jsonBody);
    }
    fetchProjects();
  }, [setProjectsArchive]);

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
