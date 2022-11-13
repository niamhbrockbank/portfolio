import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import "./styles.scss";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import projectsArchive from "./projectsArchive.json";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App(): JSX.Element {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/work"
          // element={<Work />}
        />
        <Route
          path="/work/:id"
          element={<ProjectPage projectsArchive={projectsArchive} />}
        />{" "}
        {/* TODO: Change project pages to /work/:id or /:name */}
        <Route
          path="/about"
          //element={<About />}
        />
        <Route
          path="/contact"
          //element={<Contact />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
