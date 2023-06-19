import React from 'react'

const Progress = () => {
  return (
    <div className=' max-w-[1440px] justify-between mx-auto cssprogress flex gap-[100px]'>
        <div className=' flex flex-col '>
            <p className=' font-NoeStandard text-[36px] leading-[49px]'>Stepping up progress in this defining decade</p>
            <p className=' font-PlusJakartaSans text-[15px] leading-[26px] tracking-normal'>Our restoration projects aim to revitalize degraded lands, promote afforestation, reforestation, and rehabilitate ecosystems affected by human activities.</p>
        </div>
        <div className=' flex gap-9 max-w-[691px]'>
            <div className=' flex flex-col gap-8'>
                <div className=' flex flex-col gap-1'>
                    <p className=' font-AnekMalayalam text-[20px] leading-7 text-[#006C2C] mb-0'>Who We Are</p>
                    <p className=' mb-0 text-[15px] leading-6 text-[#2D2D2D]'>A dedicated environmental non-profit organization working tirelessly to protect & preserve our planet, committed to making a positive impact on the environment</p>
                </div>
                <div className=' flex flex-col gap-1'>
                    <p className=' font-AnekMalayalam text-[20px] leading-7 text-[#006C2C] mb-0'>How To Help</p>
                    <p className=' mb-0 text-[15px] leading-6 text-[#2D2D2D]'>There are many ways to contribute to us: Volunteer with us, help spread awareness or donate to our projects. <span className=' text-[#006C2C] underline hover:cursor-pointer'>See how</span> </p>
                </div>
            </div>
            <div className=' flex flex-col gap-8'>
                <div className=' flex flex-col gap-1'>
                    <p className=' font-AnekMalayalam text-[20px] leading-7 text-[#006C2C] mb-0'>What We Do</p>
                    <p className=' mb-0 text-[15px] leading-6 text-[#2D2D2D]'>Create a sustainable future,  protect and restore the environment through community engagement, campaigns, projects, events striving for a greener & brighter future for all.</p>
                </div>
                <div className=' flex flex-col gap-1'>
                    <p className=' font-AnekMalayalam text-[20px] leading-7 text-[#006C2C] mb-0'>Where We Work</p>
                    <p className=' mb-0 text-[15px] leading-6 text-[#2D2D2D]'>We are based in Udaipur, Rajasthan. Yet we can provide our services and social work in the state, outside and even on global scale.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress