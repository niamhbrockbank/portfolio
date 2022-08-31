import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import MenuBar from "./components/MenuBar";
import "./styles.css";
import { useState } from "react";

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState("homepage");
  console.log(currentPage)
  return (
    <>
    <MenuBar setCurrentPage={setCurrentPage} />
      {currentPage === "homepage" &&
        <>
          <IntroSection />
          <ProjectsSection setCurrentPage={setCurrentPage} />
          <Footer setCurrentPage={setCurrentPage} />
        </>
      }
      
    </>
  );
}

export default App;
