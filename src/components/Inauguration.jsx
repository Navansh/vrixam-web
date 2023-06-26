import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 768 },
    items: 2,
  },

  tablet: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
const arrowStyle = {
  background: "transparent",
  border: 0,
  color: "#fff",
  fontSize: "80px",
};

const Inauguration = () => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className='carousel-button-group mr-[110px]'>
        <button className='carousel-btn prev' onClick={() => previous()}>
          {" "}
          <AiOutlineLeft className=" scale-50" />
        </button>
        <button className='carousel-btn next' onClick={() => next()}>
          <AiOutlineLeft className='next-btn scale-50' />
        </button>
      </div>
    );
  };
  return (
    <div className='gallery-full sm:hidden lg:block'>
      <div className='gallery-heading mr-[110px]'>
        <h3 className="font-NoeStandard">Inauguration Ceremony</h3>
      </div>
      <Carousel
        className='carousel-gallery car-1'
        swipeable={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        draggable={false}
        autoPlay={true}
        responsive={responsive}
        infinite={true}
        slidesToSlide={2}
      >
        <div className=' why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-1.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-2.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>
        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-3.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>
        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-4.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className=' why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-5.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className=' why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-6.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-7.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-8.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>
      </Carousel>

      <Carousel
        className='carousel-gallery car-2'
        swipeable={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        draggable={false}
        autoPlay={true}
        responsive={responsive}
        infinite={true}
        slidesToSlide={1}
      >
        <div className=' why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-1.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-2.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>
        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-3.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>
        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-4.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className=' why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-5.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className=' why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-6.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-7.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className='why-cards'>
          <div className='card-img'>
            <img src='../assets/Gallery-8.png' alt='' />
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Inauguration;
