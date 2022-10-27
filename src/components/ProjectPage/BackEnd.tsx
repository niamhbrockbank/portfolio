import { Project } from "../../types";
import mapToCodeSnippet from "../../utils/mapToCodeSnippet";

interface BackEndProps {
  project: Project;
}

export default function BackEnd({ project }: BackEndProps): JSX.Element {
  return (
    <>
      {project.back_end !== undefined && (
        <>
          <h1>Back End</h1>
          <ul>
            <li>
              <a
                href={project.back_end.deployed_link}
                target="_blank"
                rel="noreferrer"
              >
                Find the deployed back-end <u>here</u>
              </a>
            </li>
            <li>
              <a
                href={project.back_end.github_link}
                target="_blank"
                rel="noreferrer"
              >
                Find the back-end GitHub repository <u>here</u>
              </a>
            </li>
          </ul>
          {project.back_end.API_documentation !== undefined && (
            <>
              <h3>API Documentation</h3>
              <p>The following shows the API endpoints, a brief description of the purpose of said endpoints and the structure of a request body.</p>
              {project.back_end.API_documentation.map((endpoint, i) => 
                mapToCodeSnippet(endpoint, "Express", i)
              )}
            </>
          )}
          {project.back_end.table_schema !== undefined && (
            <div>
              <h3>Table Schema</h3>
              <p>
                The following SQL command shows the tables and their respective
                columns present in the database of this project, along with
                their constraints.
              </p>
              {project.back_end.table_schema.map((schema, i) =>
                mapToCodeSnippet(schema, "SQL", i)
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
