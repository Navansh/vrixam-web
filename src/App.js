import "./App.css";
import Navbar from "./components/Navbar";
import CarouselFade from "./components/CarouselFade";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "./components/Progress";
import Highlights from "./components/Highlights";
import OurMotto from "./components/OurMotto";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselFade />
      <OurMotto />
      <Progress></Progress>
      <Highlights></Highlights>
    </div>
  );
}

export default App;
