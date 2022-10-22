import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import "./styles.css";
import ProjectPage from "./components/ProjectPage";
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
          path="/:id"
          element={<ProjectPage projectsArchive={projectsArchive} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
