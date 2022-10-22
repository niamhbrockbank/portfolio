import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import projectsArchive from "../../projectsArchive.json";

  
export default function Home():JSX.Element{
return (
    <>
        <div className="main_page">
        <IntroSection />
        <ProjectsSection
            projectsArchive={projectsArchive}
        />
        </div>
    </>
)
}