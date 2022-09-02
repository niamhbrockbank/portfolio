import { Feature } from "../types";
import createPlaceholderFeats from "../utils/createPlaceholderFeats";

interface FeaturedProjectsProps {
}

export default function FeaturedProjects({
}: FeaturedProjectsProps): JSX.Element {
  const features : Feature[]= [];

  let numOfFeats = features.length;

  return (
    <>
      <h1 id="featured">featured</h1>
      <ul id="featured_list">
        {features.map((ft) => (
          <li className="featured_project" key={ft.name}>
            {ft.name}
          </li>
        ))}
        {numOfFeats !== 4 && createPlaceholderFeats(4 - numOfFeats)}
      </ul>
    </>
  );
}
