import React from "react";
import { FaGreaterThan } from "react-icons/fa";
const OurMotto = () => {
  const moveLeft = () => {
    document.querySelector(".videos ").classList.remove("shift");
  };
  const moveRight = () => {
    document.querySelector(".videos").classList.add("shift");
  };
  return (
    <div className='our-motto'>
      <div className='main-motto'>
        <div className='heading'>
          Our Motto <br />
          <br />
          🌱
          <div className='sub-heading'>
            <h3>
              पेड़ लगा, धरा <br /> का श्रृंगार करे |
            </h3>
          </div>
        </div>
        <div className='arrows'>
          <div className='left' onClick={moveLeft}>
            <FaGreaterThan className='sub-arrow' />
          </div>
          <div className='right' onClick={moveRight}>
            <FaGreaterThan className='sub-arrow' />
          </div>
        </div>
      </div>
      <div className='videos'>
        <div className='video video-1'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/RBqWwm2eEq0'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
        <div className='video video-2'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/RBqWwm2eEq0'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurMotto;
