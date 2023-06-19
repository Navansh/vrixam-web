import "./App.css";
import Navbar from "./components/Navbar";
import CarouselFade from "./components/CarouselFade";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "./components/Progress";
import Highlights from "./components/Highlights";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselFade />
      <Progress></Progress>
      <Highlights></Highlights>
    </div>
  );
}

export default App;
