import Menu from "./components/Menu";
import "./styles.scss";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import projectsArchive from "./projectsArchive.json";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App(): JSX.Element {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/work"
          element={<Work projectsArchive={projectsArchive} />}
        />
        <Route
          path="/work/:id"
          element={<ProjectPage projectsArchive={projectsArchive} />}
        />{" "}
        {/* TODO: Change project pages to /work/:id or /:name */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
