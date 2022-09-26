import Archive from "./Archive";
import FeaturedProjects from "./FeaturedProjects";
import { Project } from "../types";

interface ProjectsSectionProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  projectsArchive: Project[];
}

export default function ProjectsSection({
  setCurrentPage,
  projectsArchive,
}: ProjectsSectionProps): JSX.Element {
  return (
    <>
      <FeaturedProjects />
      <Archive
        projectsArchive={projectsArchive}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
