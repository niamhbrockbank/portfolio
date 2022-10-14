import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import MenuBar from "./components/MenuBar";
import "./styles.css";
import { useState } from "react";
import ProjectPage from "./components/ProjectPage";
import projectsArchive from "./projectsArchive.json";
import {Route, Link, Routes} from 'react-router-dom';

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <MenuBar setCurrentPage={setCurrentPage} />
      <Routes>
        <Route path='/' element={<Home setCurrentPage={setCurrentPage} currentPage={currentPage}/>} />
      </Routes>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;

interface HomeProps{
  currentPage : number;
  setCurrentPage : React.Dispatch<React.SetStateAction<number>>;
}

export function Home({currentPage, setCurrentPage}: HomeProps):JSX.Element{
  return (
    <>
      {currentPage === 0 ? (
        <div className="main_page">
          <IntroSection />
          <ProjectsSection
            setCurrentPage={setCurrentPage}
            projectsArchive={projectsArchive}
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
    </>
  )
}