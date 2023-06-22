import React, { useEffect } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var navbar = document.getElementById("navbar");

      if (window.scrollY > 575) {
        navbar.style.backgroundColor = "#1A1A1A";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    });

    const scrollLinks = document.querySelectorAll(".navlinks");
    console.log(scrollLinks);
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        let id = "";
        console.log(e.target);
        if (e.target.classList.contains("special-click")) {
          console.log(e.target.parentNode.parentNode);
          id = e.target.parentNode.parentNode.href.slice(-6);
        } else {
          console.log(e.target);

          id = e.target.parentNode.getAttribute("href").slice(1);
        }
        console.log(id);
        const element = document.getElementById(id);
        console.log(element);
        //
        let position = element.offsetTop - 62;
        window.scrollTo({
          left: 0,
          // top: element.offsetTop,
          top: position,
          behavior: "smooth",
        });
      });
    });
  });

  function clickhandler() {
    const c = !toggle;
    setToggle(c);
  }

  //   if(toggle) {
  //     let navbar = document.getElementById("navbar");
  //     navbar.style.backgroundColor = "#1A1A1A";
  //   }

  useEffect(() => {
    if (toggle) {
      let navbar = document.getElementById("navbar");
      navbar.style.backgroundColor = "#1A1A1A";
    } else {
      let navbar = document.getElementById("navbar");
      navbar.style.backgroundColor = "transparent";
    }
  }, [toggle]);

  return (
    <div className='relative'>
      <nav className=' scroll-smooth ' id='navbar'>
        <div className='sm:max-w-[468px] md:max-w-[768px] lg:max-w-[1440px] mx-auto '>
          <div className='sm:ml-[1.5rem] sm:mr-[1.5rem]  md:ml-[2.188rem] md:mr-[2.188rem] lg:ml-[6.75rem] lg:mr-[6.75rem] flex justify-between  md:gap-72 h-20 items-center font-AnekMalayalam  text-white'>
            <div className=' flex gap-[62px] text-[13px] leading-[18px] items-center'>
              <div className=' flex items-center gap-2'>
                <img
                  src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687167490/logo_m3yaf9.png'
                  alt=''
                  className=' scale-75'
                />
                <div>
                  <p className=' text-[18px] leading-5 font-NoeStandard mb-0'>
                    Vrixam
                  </p>
                  <p className=' text-[18px] leading-5 font-NoeStandard mb-0'>
                    Amritam
                  </p>
                  <p className=' text-[10px] mb-0'>Seva Sansthan</p>
                </div>
              </div>

              <a
                href='#what-we-do'
                className='navlinks sm:hidden md:hidden lg:block'
              >
                WHAT WE DO
              </a>

              <a href='' className='navlinks sm:hidden md:hidden lg:block'>
                <p className=' mb-0'>ABOUT US</p>
              </a>
              <a href='' className='navlinks sm:hidden md:hidden lg:block'>
                <p className=' mb-0'>OUR VISION</p>
              </a>
              <a href='' className='navlinks sm:hidden md:hidden lg:block'>
                <p className=' mb-0'>GALLERY</p>
              </a>
              <a href='#team' className='navlinks sm:hidden md:hidden lg:block'>
                <p className=' mb-0'>OUR TEAM</p>
              </a>
            </div>

            <div className='sm:flex gap-2 md:flex md:gap-6'>
              <a href='#donate' className='navlinks'>
                <button className='flex lg:h-[43px] sm:h-[34px] sm:w-[100px] md:w-[127px] justify-center items-center mb-0 gap-2 rounded-full bgtransitiongreen'>
                  <p className=' mb-0 sm:mt-[2px] md:mt-1 uppercase special-click'>
                    Donate
                  </p>
                  <BiDonateHeart className='special-click' />
                </button>
              </a>
              <button onClick={clickhandler} className='lg:hidden text-white'>
                {/* condition to show this only when toggle is false */}
                <div className={`${toggle ? "hidden" : "block"}`}>
                  <RxHamburgerMenu className=' text-[30px]' />
                </div>
                {/* condition to show this only when toggle is true */}
                <div
                  className={`${
                    toggle ? "block" : "hidden"
                  } text-[#ffffff] stroke-white`}
                >
                  <GrClose className=' grclose text-[30px]'></GrClose>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* condition to show this only when toggle is true */}
      <div
        className={`${
          toggle ? "block" : "hidden"
        } lg:hidden fixed z-50 top-[78px] w-full`}
      >
        <div className='bg-[#1A1A1A] flex flex-col items-center text-white'>
          <a
            href='#what-we-do'
            className='navlinks border-t-2 w-full h-[83px] flex flex-col items-center justify-center'
          >
            WHAT WE DO
          </a>

          <a
            href=''
            className='navlinks border-t-2 w-full h-[83px] flex flex-col items-center justify-center'
          >
            <p className=' mb-0'>ABOUT US</p>
          </a>

          <a
            href=''
            className='navlinks border-t-2 w-full h-[83px] flex flex-col items-center justify-center'
          >
            <p className=' mb-0'>OUR VISION</p>
          </a>

          <a
            href=''
            className='navlinks border-t-2 w-full h-[83px] flex flex-col items-center justify-center'
          >
            <p className=' mb-0'>GALLERY</p>
          </a>

          <a
            href='#team'
            className='navlinks border-t-2 w-full h-[83px] flex flex-col items-center justify-center'
          >
            OUR TEAM
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
