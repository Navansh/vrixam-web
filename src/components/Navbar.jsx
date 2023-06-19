import React from 'react'
import {BiDonateHeart} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className=' bg-transparent'>
        <nav className='flex justify-between max-w-[1440px] mx-auto py-0  gap-72 h-20 items-center font-AnekMalayalam  text-white'>
            <div className=' flex gap-[72px] text-[13px] items-center'>
                <div className=' flex items-center gap-2'>
                    <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687167490/logo_m3yaf9.png" alt="" className=' scale-75'/>
                    <div>
                        <p className=' text-[18px] leading-5 font-NoeStandard mb-0'>Vrixam</p>
                        <p className=' text-[18px] leading-5 font-NoeStandard mb-0'>Amritam</p>
                        <p className=' text-[10px] mb-0'>Seva Sansthan</p>
                    </div>
                </div>

                <p className=' mb-0'>WHAT WE DO</p>
                <p className=' mb-0'>ABOUT US</p>
                <p className=' mb-0'>OUR VISION</p>
                <p className=' mb-0'>GALLERY</p>
                <p className=' mb-0'>OUR TEAM</p>

            </div>

            <div className=''>
                <button className='flex h-[43px] w-[127px] justify-center items-center mb-0 gap-2 rounded-full bgtransitiongreen'>
                    <p className=' mb-0'>Donate</p>
                    <BiDonateHeart/>
                </button>
            </div>
            

        </nav>
    </div>
  )
}

export default Navbar