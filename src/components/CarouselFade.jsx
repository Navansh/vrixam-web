import { Carousel } from "react-bootstrap";
import carasol_data from "../data/Carasol-data";
function CarouselFade() {
  return (
    <Carousel fade>
      {carasol_data.map((item) => {
        return (
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-img'
              src={item.url}
              alt='First slide'
            />
            <Carousel.Caption className='captions-all'>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <button className='support-btn'>Support Now</button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselFade;
