import Archive from "./Archive";
import { Project } from "../../types";
import FeaturedProjects from "./FeaturedProjects";

interface ProjectsSectionProps {
  projectsArchive: Project[];
}

export default function ProjectsSection({
  projectsArchive,
}: ProjectsSectionProps): JSX.Element {
  return (
    <>
      <FeaturedProjects />
      <Archive
        projectsArchive={projectsArchive}
      />
    </>
  );
}
