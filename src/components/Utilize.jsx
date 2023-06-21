import React from 'react'

const Utilize = () => {
  return (
    <div className=' w-full  cssutilize'>
        <div className=' flex mx-auto py-[70px] gap-9 max-w-[1440px]'>
            <div className=' max-w-[561px] flex flex-col gap-[14px] ml-[180px] mt-[21px]'>
                <p className=' font-NoeStandard mb-0 text-[36px] leading-[49px] text-[#04461F]'>How we utilize your <br /> donations and where it goes</p>
                <p className=' font-PlusJakartaSans text-[16px] leading-[27px] text-[#2D2D2D] mb-0'>We understand that when you make a donation, you <br /> want to know exactly where your money is going and we <br /> pledge to be transparent.</p>
                <div className=' flex flex-wrap gap-6 mt-3'>
                    <div className=' flex justify-center gap-[6px]'>
                        <div className='h-[14px] mt-1 w-[14px] bg-[#006C2C]'></div>
                        <p className=' mb-0'>Plantation Projects</p>
                    </div>
                    <div className=' flex ml-5 justify-center gap-[6px]'>
                        <div className='h-[14px] mt-1 w-[14px] bg-[#F2994A]'></div>
                        <p className=' mb-0'>Conservation of Temples</p>
                    </div>
                    <div className=' flex justify-center gap-[6px]'>
                        <div className='h-[14px] mt-1 w-[14px] bg-[#54C1F0]'></div>
                        <p className=' mb-0'>Rainwater Harvesting</p>
                    </div>
                    <div className=' flex justify-center gap-[6px]'>
                        <div className='h-[14px] mt-1 w-[14px] bg-[#F2C94C]'></div>
                        <p className=' mb-0'>Solar Energy Panel Setups</p>
                    </div>
                </div>
            </div>

            <div className=' ml-5'>
                <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687248186/utilize_qgswhh.png" className=' w-[512px] h-[313px]' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Utilize