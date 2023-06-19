import "./App.css";
import Navbar from "./components/Navbar";
import CarouselFade from "./components/CarouselFade";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "./components/Progress";
import OurMotto from "./components/OurMotto";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselFade />
      <OurMotto />
      <Progress></Progress>
    </div>
  );
}

export default App;
