import { useEffect, useState } from "react";
import { Project } from "../types";
import projectsArchive from "./projectsArchive.json";

interface ProjectPageProps {
  currentPage: string;
}

export default function ProjectPage({
  currentPage,
}: ProjectPageProps): JSX.Element {
  const [currentProject, setCurrentProject] = useState<Project[]>([{name: 'loading', description : 'loading here'}])

  useEffect( () => {
    async function fetchProjects(){
      const response = await fetch('https://niamh-brockbank.herokuapp.com/')
      const jsonBody : Project[] = await response.json()
      setCurrentProject(jsonBody)
    }

    fetchProjects()
  }, [])

  // const currentProject: Project | undefined = projectsArchive.find(
  //   (proj) => proj.name === currentPage
  // );

  if (currentProject === undefined) {
    return <h1>Project cannot be found.</h1>;
  }

  const { name, description } = currentProject[0];

  return (
    <div id="project_page">
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {/* <a href={deployed_link}>find the project output here</a> */}
        </li>
        {/* {currentProject.github_link && (
          <li>
            <a href={currentProject.github_link}>find the GitHub repo here</a>
          </li>
        )} */}
        <li>date created:</li>
        <li>languages used: </li>
        <li>image</li>
      </ul>
    </div>
  );
}
