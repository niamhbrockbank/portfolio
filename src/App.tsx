import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import MenuBar from "./components/MenuBar";
import "./styles.css";
import { useState } from "react";
import ProjectPage from "./components/ProjectPage";
import projectsArchive from "./projectsArchive.json";
import {Route, Routes} from 'react-router-dom';
import { Project } from "./types";

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Home setCurrentPage={setCurrentPage}/>} />
        <Route path='/project' element={<ProjectPage currentPage={currentPage} projectsArchive={projectsArchive}/>} />
      </Routes>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;

interface HomeProps{
  setCurrentPage : React.Dispatch<React.SetStateAction<number>>;
}

export function Home({setCurrentPage}: HomeProps):JSX.Element{
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