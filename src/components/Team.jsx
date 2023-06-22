import React from 'react'

const Team = () => {
  return (
    <div className=' cssteam' id='team'>
        <div className='max-w-[1440px] mx-auto flex flex-col items-center '>
            <div className=' mt-[1rem] sm:hidden lg:flex'>
                <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687288561/team_2_j1xaid.png" className=' h-[577px] w-[1080px]' alt="" loading='lazy'/>
            </div>

            <div className='px-12 sm:hidden md:flex lg:hidden'>
                <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687427840/team_tab_rbca0p.png" alt="" className='' />
            </div>

            <div className='px-6 sm:flex md:hidden'>
                <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687427840/team_mobile_xphw4a.png" alt="" className=' w-[312px] h-[851px]'/>
            </div>
            <div className=' mt-[2.75rem] max-w-[383px] rounded-full cssbutton flex gap-2 justify-center items-center bg-[#E6F0EA]'>
                <p className=' mb-0 uppercase text-[#006C2C] font-AnekMalayalam text-[18px] leading-[25px]'>view list of contributors</p>
                <img src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687274934/Vector_xsvnrd.svg' alt='d'/>
            </div>
        </div>

        
        
    </div>
  )
}

export default Team