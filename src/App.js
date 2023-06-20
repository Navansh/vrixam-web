import "./App.css";
import Navbar from "./components/Navbar";
import CarouselFade from "./components/CarouselFade";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "./components/Progress";
import Highlights from "./components/Highlights";
import OurMotto from "./components/OurMotto";
import Aims from "./components/Aims";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselFade />
      <OurMotto />
      <Progress></Progress>
      <Highlights></Highlights>




      <Aims></Aims>
    </div>
  );
}

export default App;
