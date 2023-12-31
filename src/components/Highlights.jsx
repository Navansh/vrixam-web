import React from "react";
import highlights_data from "../data/Highlights-data";
const Highlights = () => {
  return (
    <div className='csshighlights max-w-[1440px] mx-auto'>
      <p className=' font-NoeStandard text-[36px] leading-[49px] text-[#171717]'>
        In the highlights
      </p>
      <div className=' flex gap-8'>
        <div className=' flex flex-col bg-[#E6F0EA] rounded-md max-w-[596px]'>
          <img
            src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687199050/highlights_1_wak8ro.png'
            height='343px'
            className=' rounded-lg'
            alt=''
          />
          <div className=' flex flex-col highlightscard gap-3'>
            <h2 className=' font-AnekMalayalam font-bold text-[28px] mb-0 leading-10 uppercase text-[#006C2C]'>
              Gift the World a Tree
            </h2>
            <div className='flex flex-col gap-2'>
              <p className=' mb-0 opacity-90 font-PlusJakartaSans text-[15px] leading-6 text-[#2D2D2D]'>
                Spread the message over planting a sapling on the <br /> special
                4 occasions in one’s life
              </p>
              <ul className='flex flex-wrap gap-x-8 w-[432px] '>
                <li
                  style={{ listStyleType: "disc" }}
                  className=' opacity-90 font-PlusJakartaSans text-[15px] leading-6'
                >
                  When a girl child takes birth
                </li>
                <li
                  style={{ listStyleType: "disc" }}
                  className='opacity-90 font-PlusJakartaSans text-[15px] leading-6'
                >
                  On birthday
                </li>
                <li
                  style={{ listStyleType: "disc" }}
                  className='opacity-90 font-PlusJakartaSans text-[15px] leading-6'
                >
                  Marriage Anniversaries
                </li>
                <li
                  style={{ listStyleType: "disc" }}
                  className='opacity-90 font-PlusJakartaSans text-[15px] leading-6'
                >
                  Tribute to Loved Ones in Heaven
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* next side */}
        <div className='  outer-hl max-w-[596px]'>
          {highlights_data.map((item, index) => {
            return (
              <div className='inner-hl bg-[#E6F0EA] rounded-lg'>
                <div className='inner-hl-div'>
                  <img src={item.url} alt='' className=' rounded-lg ' />
                </div>
                <div className='flex flex-col mt-2 py-3 px-4 gap-1'>
                  <h2 className=' font-AnekMalayalam font-bold text-[22px] mb-0 leading-[31px] uppercase text-[#006C2C] '>
                    {item.title}
                  </h2>
                  <p className=' font-PlusJakartaSans text-[#2D2D2D] text-[15px] mb-0 opacity-90 leading-6'>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
