import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1000 },
    items: 3,
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

const Awards = () => {
  return (
    <div className='all-awards'>
      <div className='awards-header'>
        <div className='main-heading'>
          <h3>
            Nationally awarded and recognized for commendable work towards
            society
          </h3>
          <div className='sub-aw-heading'>
            <p>
              National Prestige Award proudly presented to Vrixam Amritam Seva
              Sansthan on 16th June, 2023 by Worthy Wellness Foundation to show
              respect and appreciation for the excellent and commendable work
              done towards society.
            </p>
          </div>
        </div>
      </div>
      <div className='awards-slider'>
        <Carousel
          swipeable={true}
          arrows={true}
          renderButtonGroupOutside={true}
          draggable={false}
          responsive={responsive}
          infinite={true}
          slidesToSlide={1}
        >
          <div className=' aw-card'>
            <div className='aw-card-img first'>
              <img src='../assets/awards-1.png' alt='' />
            </div>
            {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img src='../assets/awards-1.png' alt='' />
            </div>
            {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
          </div>
          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img src='../assets/awards-1.png' alt='' />
            </div>
            {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
          </div>
        </Carousel>
      </div>
      <div className='right-white'></div>
    </div>
  );
};

export default Awards;
