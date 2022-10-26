import { Project } from "../../types"

interface BackEndProps{
    project : Project
}

export default function BackEnd({project} : BackEndProps):JSX.Element{
    return (
        <>
        {project.back_end !== undefined &&
            (<>
                <h1>Back End</h1>
                <ul>
                    <li>
                    <a 
                        href={project.back_end.deployed_link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Find the deployed back-end here
                    </a>
                    </li>
                    <li>
                    <a 
                        href={project.back_end.github_link} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Find the back-end GitHub repository here
                    </a>
                    </li>
                </ul>
            </>)}
    </>
    )
}