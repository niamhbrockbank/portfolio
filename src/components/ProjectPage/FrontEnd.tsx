import { Project } from "../../types"

interface FrontEndProps{
    project : Project
}

export default function FrontEnd({project} : FrontEndProps):JSX.Element{
  return (
      <>
        {project.front_end !== undefined && (
        <>
          <h1>Front End</h1>
          <ul>
            <li>
              <a
                href={project.front_end.deployed_link}
                target="_blank"
                rel="noreferrer"
              >
                Find the deployed site here
              </a>
            </li>
            <li>
              <a
                href={project.front_end.github_link}
                target="_blank"
                rel="noreferrer"
              >
                Find the GitHub repository here
              </a>
            </li>
          </ul>
        </>
      )}
      </>
  )
}