import React from 'react'
import {BiDonateHeart} from 'react-icons/bi'

const Navbar = () => {

    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');

        if (window.pageYOffset > 575) {
          navbar.style.backgroundColor = '#1A1A1A';
        } else {
          navbar.style.backgroundColor = 'transparent';
        }
    });

  return (
    <nav className='w-full scroll-smooth' id='navbar'>
        <div className=' max-w-[1440px] mx-auto '>
            <div className='ml-[6.75rem] mr-[6.75rem] flex justify-between py-0  gap-72 h-20 items-center font-AnekMalayalam  text-white'>
                <div className=' flex gap-[62px] text-[13px] leading-[18px] items-center'>
                    <div className=' flex items-center gap-2'>
                        <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687167490/logo_m3yaf9.png" alt="" className=' scale-75'/>
                        <div>
                            <p className=' text-[18px] leading-5 font-NoeStandard mb-0'>Vrixam</p>
                            <p className=' text-[18px] leading-5 font-NoeStandard mb-0'>Amritam</p>
                            <p className=' text-[10px] mb-0'>Seva Sansthan</p>
                        </div>
                    </div>

                    <a href="#" className='navlinks'>
                        <p className=' mb-0'>WHAT WE DO</p>
                    </a>
                    
                    <a href="" className='navlinks'>
                        <p className=' mb-0'>ABOUT US</p>
                    </a>
                    <a href="" className='navlinks'>
                        <p className=' mb-0'>OUR VISION</p>
                    </a>
                    <a href="" className='navlinks'>
                        <p className=' mb-0'>GALLERY</p>
                    </a>
                    <a href="#team" className='navlinks'>
                        <p className=' mb-0'>OUR TEAM</p>
                    </a>

                </div>

                <div className=''>
                    <button className='flex h-[43px] w-[127px] justify-center items-center mb-0 gap-2 rounded-full bgtransitiongreen'>
                        <p className=' mb-0'>Donate</p>
                        <BiDonateHeart className=' mb-1'/>
                    </button>
                </div>
            </div>
            

        </div>
    </nav>
  )
}

export default Navbar