import Archive from "./components/Archive";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import LatestSection from "./components/LatestSection";
import MenuBar from "./components/MenuBar";
import "./styles.css";

function App(): JSX.Element {
  return (
    <>
      <MenuBar />
      <IntroSection />
      <LatestSection />
      <Archive />
      <Footer />
    </>
  );
}

export default App;
