import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const OurMotto = () => {
  function CustomLeftArrow({ onClick }) {
    function handleClick() {
      // do whatever you want on the right button click
      console.log("Right button clicked, go to next slide");
      // ... and don't forget to call onClick to slide
      onClick();
    }

    return (
      <AiOutlineRight
        onClick={handleClick}
        style={{ transform: "rotate(180deg)", fontSize: "9px !important" }}
        aria-label='Go to next slide'
        className='sub left-sub react-multiple-carousel__arrow react-multiple-carousel__arrow--left'
      />
    );
  }

  function CustomRightArrow({ onClick }) {
    function handleClick() {
      // do whatever you want on the right button click
      console.log("Right button clicked, go to next slide");
      // ... and don't forget to call onClick to slide
      onClick();
    }

    return (
      <AiOutlineRight
        onClick={handleClick}
        aria-label='Go to next slide'
        className='sub right-sub react-multiple-carousel__arrow react-multiple-carousel__arrow--right'
      />
    );
  }
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
  const moveLeft = () => {
    document.querySelector(".videos ").classList.remove("shift");
  };
  const moveRight = () => {
    document.querySelector(".videos").classList.add("shift");
  };
  return (
    <div className='our-motto'>
      <div className='main-motto'>
        <div className='heading font-AnekMalayalam font-bold uppercase text-[#006C2C] text-[20px]'>
          Our Motto <br />
          <br />
          <div className='text-[36px]'>🌱</div>
          <div className='sub-heading'>
            <h3 className=' font-YatraOne'>
              पेड़ लगा, धरा <br className='disp-change' /> का श्रृंगार करे |
            </h3>
          </div>
        </div>
      </div>

      <Carousel
        swipeable={false}
        draggable={false}
        autoPlay={true}
        responsive={responsive}
        infinite={true}
        slidesToSlide={1}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        renderButtonGroupOutside={true}
      >
        <div className='why-cards'>
          <div className='card-img'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/jEtgjgzLWHk'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className=' why-cards'>
          <div className='card-img'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/UNUOUDECykI'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className='why-cards'>
          <div className='card-img'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/JRfUMTpTyHU'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
        </div>

        <div className='why-cards'>
          <div className='card-img'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/ZkRGN_dXIU8'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
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

export default OurMotto;
