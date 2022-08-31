import projectsArchive from './projectsArchive.json'

interface ProjectPageProps{
    currentPage : string
}

export default function ProjectPage({currentPage} : ProjectPageProps):JSX.Element{
    const currentProject = projectsArchive.find((proj) => proj.name === currentPage)
    console.log(currentProject)
    return (
        <div id='project_page'>
            hi im a project page
        </div>
    )
}