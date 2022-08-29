import { Project } from "../types";

export default function Archive(): JSX.Element {
  const archiveProjects : Project[] = [
    {
      name : 'to-do app',
      description : 'full-stack app that allows a user to insert and delete tasks.',
      image : 'no image yet'
    },
    {
      name : 'tv show picker',
      description : 'front-end app that fetches tv show data from an API and can navigate between shows with a dropdown',
      image : 'no image yet'
    },
    {
      name : 'baby names picker',
      description : 'front-end app that can be used to choose baby names',
      image : 'no image yet'
    }
  ]

  return (
    <>
      <h1 id='archive_title'>Archive</h1>
      <ul id="archive_list">
        {archiveProjects.map((project) => <li className="archive_project" key={archiveProjects.indexOf(project)}>{project.name.toLowerCase()}</li>)}
      </ul>
    </>
  );
}
