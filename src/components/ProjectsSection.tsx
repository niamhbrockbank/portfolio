import Archive from "./Archive";
import FeaturedProjects from "./FeaturedProjects";
import projectsArchive from "./projectsArchive.json";

interface ProjectsSectionProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProjectsSection({
  setCurrentPage,
}: ProjectsSectionProps): JSX.Element {
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
