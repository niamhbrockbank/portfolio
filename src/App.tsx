import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import "./styles.css";
import { useState } from "react";
import ProjectPage from "./components/ProjectPage";
import projectsArchive from "./projectsArchive.json";
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home/Home";

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

