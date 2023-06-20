import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full bg-[#1A1A1A]'>
        <div className=' flex flex-col max-w-[1440px] mx-auto'>
            <div className='flex ml-[6.75rem] mr-[6.75rem] justify-between mt-[3.625rem]'>
                <div className=' gap-[18px] flex flex-col'>
                    <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687280053/logo-text_wfvhxi.png" alt="" className='w-[228px]'/>
                    <p className=' text-white max-w-[380px] opacity-70 font-PlusJakartaSans text-[13px] leading-[24px]'>Vrixam Amritam has served the State and its citizens, backward domains linked with our purpose and has created everlasting connections with individuals, organizations, Government departments and the nature itself to expand and spread to safeguard vulnerable species and their habitats.</p>
                </div>

                <div className='flex gap-[36px] '>
                    <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687282339/scan_qr_vzbdwp.png" alt="" className=' h-[233px]'/>
                    <div className='max-w-[314px]'>
                        <p className=' text-white text-[30px] max-w-[257px] mb-0 font-NoeDisplay'> <span className=' text-[#2DA94F]'>Support</span> our cause for a better world.</p>
                        <p className=' text-white text-[13px] font-PlusJakartaSans mt-[8px] leading-[20px] opacity-80'>Donate to our NGO now via UPI and be the catalyst for positive change. Every contribution counts in building sustainable communities and empowering lives. Join us today!</p>
                        <div className='flex items-center gap-[1rem]'>
                            <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/UPI-Logo-vector_1_upr5je.png" className=' w-[69px] h-[24px]' alt="" />
                            <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/Paytm_Logo__standalone_1_fttc5r.png" alt=" " className='w=[79px] h-[24px]' />
                            <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/google-pay-icon_1_bujlpn.png" alt="" className=' w-[33px] h-[28px]'/>
                            <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/phonepe-1_1_yduhcu.png" alt="" className=' w-[35px] h-[35px]'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' ml-[6.75rem] mr-[6.75rem] mt-[4.25rem] h-[1px] bg-white'></div>
            <p className=' ml-[6.75rem] mb-[1.5rem] font-PlusJakartaSans mt-[1.125rem] mr-[6.75rem] text-white'>© Copyright 2023, All Rights Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer