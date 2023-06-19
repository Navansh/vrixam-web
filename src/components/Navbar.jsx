import React from 'react'
import {BiDonateHeart} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='bg-[#1a1a1a]'>
        <nav className='flex justify-between max-w-[1440px] mx-auto py-0  gap-72 h-20 items-center  text-white'>
            <div className=' flex gap-[72px] text-[13px] items-center'>
                <div className=' flex items-center gap-2'>
                    <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687167490/logo_m3yaf9.png" alt="" className=' scale-75'/>
                    <div>
                        <p className=' text-[18px] leading-5'>Vrixam</p>
                        <p className=' text-[18px] leading-5'>Amritam</p>
                        <p className=' text-[10px]'>Seva Sansthan</p>
                    </div>
                </div>

                <p>WHAT WE DO</p>
                <p>ABOUT US</p>
                <p>OUR VISION</p>
                <p>GALLERY</p>
                <p>OUR TEAM</p>

            </div>

            <div className=''>
                <button className='flex h-[43px] w-[127px] items-center justify-center gap-2 rounded-full bgtransitiongreen'>
                    <p>Donate</p>
                    <BiDonateHeart/>
                </button>
            </div>
            

        </nav>
    </div>
  )
}

export default Navbar