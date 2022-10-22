import Archive from "./Archive";
import { Project } from "../../types";
import FeaturedProjects from "./FeaturedProjects";

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
