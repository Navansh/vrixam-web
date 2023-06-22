import "./App.css";
import Navbar from "./components/Navbar";
import CarouselFade from "./components/CarouselFade";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "./components/Progress";
import Highlights from "./components/Highlights";
import OurMotto from "./components/OurMotto";
import Aims from "./components/Aims";

import Utilize from "./components/Utilize";
import Donation from "./components/Donation";

import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Awards from "./components/Awards";
import Newspaper from "./components/Newspaper";
import Seeds from "./components/Seeds";
import HighlightsV2 from "./components/HighlightsV2";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselFade />
      <OurMotto />
      <Progress></Progress>
      {/* <Highlights></Highlights> */}
      <HighlightsV2></HighlightsV2>
      <Aims></Aims>

      <Utilize></Utilize>

      <Gallery />
      <Awards />
      <Donation></Donation>
      <Newspaper />
      <Team></Team>
      <Seeds />
      <Footer></Footer>
    </div>
  );
}

export default App;
