import Archive from "./Archive";
import Footer from "./Footer";
import IntroSection from "./IntroSection";
import LatestSection from "./LatestSection";
import MenuBar from "./MenuBar";
import './styles.css'

function App(): JSX.Element {
  return (
  <>
    <MenuBar />
    <IntroSection />
    <LatestSection />
    <Archive />
    <Footer />
  </>
  )
}

export default App;
