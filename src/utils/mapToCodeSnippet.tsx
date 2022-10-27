import { Language } from "../types";

export default function mapToCodeSnippet(
  code: string,
  language: Language,
  index: number
): JSX.Element {
  //TODO: format code based on language, colourise keywords
  return (
    <p className="pre" key={index}>
      <code>{code}</code>
    </p>
  );
}
