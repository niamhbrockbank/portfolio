import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import MenuBar from "./components/MenuBar";
import "./styles.css";
import { useState } from "react";
import ProjectPage from "./components/ProjectPage";
import { Project } from "./types";

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsArchive, setProjectsArchive] = useState<Project[]>([
    { id: 0, name: "loading", description: "loading project archive" },
  ]);

  return (
    <>
      <MenuBar setCurrentPage={setCurrentPage} />
      {currentPage === 0 ? (
        <div className="main_page">
          <IntroSection />
          <ProjectsSection
            setCurrentPage={setCurrentPage}
            projectsArchive={projectsArchive}
            setProjectsArchive={setProjectsArchive}
          />
        </div>
      ) : (
        <div className="main_page">
          <ProjectPage
            currentPage={currentPage}
            projectsArchive={projectsArchive}
          />
        </div>
      )}
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
