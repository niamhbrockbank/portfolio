import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import projectsArchive from "../../projectsArchive.json";

interface HomeProps{
    setCurrentPage : React.Dispatch<React.SetStateAction<number>>;
}
  
export default function Home({setCurrentPage}: HomeProps):JSX.Element{
return (
    <>
        <div className="main_page">
        <IntroSection />
        <ProjectsSection
            setCurrentPage={setCurrentPage}
            projectsArchive={projectsArchive}
        />
        </div>
    </>
)
}