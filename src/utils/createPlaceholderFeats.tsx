export default function createPlaceholderFeats(
  numPlaceholders: number
): JSX.Element[] {
  return [...Array(numPlaceholders)].map((i) => createComingSoonElement(i));
}

function createComingSoonElement(key: number): JSX.Element {
  return (
    <li className="featured_project" key={key}>
      coming soon
    </li>
  );
}
