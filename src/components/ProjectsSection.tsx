import Archive from "./Archive";
import FeaturedProjects from "./FeaturedProjects";
import projectsArchive from "./projectsArchive.json";

export default function ProjectsSection(): JSX.Element {
  return (
    <>
      <FeaturedProjects projectsArchive={projectsArchive} />
      <Archive projectsArchive={projectsArchive} />
    </>
  );
}
