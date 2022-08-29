import Archive from "./components/Archive";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import MenuBar from "./components/MenuBar";
import "./styles.css";

function App(): JSX.Element {
  return (
    <>
      <MenuBar />
      <IntroSection />
      <ProjectsSection />
      <Archive />
      <Footer />
    </>
  );
}

export default App;
