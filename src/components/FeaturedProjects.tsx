import { Project } from "../types";
import createPlaceholderFeats from "../utils/createPlaceholderFeats";

interface FeaturedProjectsProps {
  projectsArchive: Project[];
}

export default function FeaturedProjects({
  projectsArchive,
}: FeaturedProjectsProps): JSX.Element {
  const featProjList = projectsArchive.filter((proj) => proj.featured);
  const featProjToShow = featProjList.slice(0, 4);

  const numOfFeatProj = featProjToShow.length;

  return (
    <>
      <h1 id="featured_title">featured</h1>
      <ul id="featured_list">
        {featProjToShow.map((proj) => (
          <li className="featured_project" key={proj.name}>
            {proj.name}
          </li>
        ))}
        {numOfFeatProj !== 4 && createPlaceholderFeats(4 - numOfFeatProj)}
      </ul>
    </>
  );
}
