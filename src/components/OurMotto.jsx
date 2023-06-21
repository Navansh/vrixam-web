import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
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
        <div className='heading font-AnekMalayalam text-[#006C2C] text-[20px]'>
          Our Motto <br />
          <br />
          <div className="text-[50px]">
            🌱
          </div>
          <div className='sub-heading'>
            <h3 className=" font-YatraOne">
              पेड़ लगा, धरा <br /> का श्रृंगार करे |
            </h3>
          </div>
        </div>
        <div className='arrows'>
          <div className='left' onClick={moveLeft}>
            <AiOutlineRight className='sub-arrow' />
          </div>
          <div className='right' onClick={moveRight}>
            <AiOutlineRight className='sub-arrow' />
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
