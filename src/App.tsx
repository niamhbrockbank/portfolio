import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import MenuBar from "./components/MenuBar";
import "./styles.css";
import { useState } from "react";
import ProjectPage from "./components/ProjectPage";

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <MenuBar setCurrentPage={setCurrentPage} />
      {currentPage === 0 ? (
        <>
          <IntroSection />
          <ProjectsSection setCurrentPage={setCurrentPage} />
        </>
      ) : (
        <>
          <ProjectPage currentPage={currentPage} />
        </>
      )}
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
