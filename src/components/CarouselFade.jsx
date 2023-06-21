import { Carousel } from "react-bootstrap";
import carasol_data from "../data/Carasol-data";
import { BiDonateHeart } from "react-icons/bi";
function CarouselFade() {
  return (
    <div className='hero-full'>
      <Carousel fade interval={3000}>
        {carasol_data.map((item) => {
          return (
            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img'
                src={item.url}
                alt='First slide'
              />
              <Carousel.Caption className='captions-all'>
                <h3 className=' font-NoeDisplay' style={item.long}>
                  {item.title}
                </h3>
                <p className=' font-PlusJakartaSans' style={item.short}>
                  {item.subtitle}
                </p>
                <button className='support-btn hover:cursor-pointer items-center font-AnekMalayalam rounded-full'>
                  Support Now
                  <span>
                    <BiDonateHeart className=' mb-1'></BiDonateHeart>
                  </span>
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselFade;
