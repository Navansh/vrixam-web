import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronLeft } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1000 },
    items: 2,
  },

  tablet: {
    breakpoint: { max: 1000, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const arrowStyle = {
  background: "transparent",
  border: 0,
  color: "#fff",
  fontSize: "80px",
};

const Gallery = () => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className='carousel-button-group'>
        <button className='carousel-btn prev' onClick={() => previous()}>
          {" "}
          <FiChevronLeft />
        </button>
        <button className='carousel-btn next' onClick={() => next()}>
          <FiChevronLeft className='next-btn' />
        </button>
      </div>
    );
  };
  return (
    <div className='gallery-full'>
      <Carousel
        className='carousel-gallery'
        swipeable={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        draggable={false}
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
    </div>
  );
};

export default Gallery;
