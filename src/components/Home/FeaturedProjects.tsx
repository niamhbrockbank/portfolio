import { Feature } from "../../types";
import createPlaceholderFeats from "../../utils/createPlaceholderFeats";

export default function FeaturedProjects(): JSX.Element {
  const features: Feature[] = [];

  const numOfFeats = features.length;

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
