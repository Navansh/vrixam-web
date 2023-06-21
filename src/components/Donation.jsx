import React from 'react'

const Donation = () => {
  return (
    <div className=' cssdonation w-full'>
        <div className=' flex max-w-[1440px] mx-auto'>
            <div className='flex flex-col ml-[6.75rem] mt-[3.875rem] '>
                <div className=' flex items-center'>
                    <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687167490/logo_m3yaf9.png" alt="" className=' h-[87px] w-[87px] mr-[19.44px]'/>
                    <div className=''>
                        <p className=' text-[35px] text-white leading-[32px] font-NoeStandard mb-0'>Vrixam</p>
                        <p className=' text-[35px] leading-[32px] text-white font-NoeStandard mb-0'>Amritam</p>
                        <p className=' text-[19px] leading-[26px] uppercase mb-0 text-white'>Seva Sansthan</p>
                    </div>
                </div>

                <div className=' mt-[46px] mb-0 text-white text-[42px] font-NoeStandard max-w-[483px] leading-[57px]'>
                    <p>We're a nonprofit with the vision of building a better future.</p>
                </div>

            </div>

            <div className=' ml-[6.375rem] mb-[5.375rem] mt-[4.688rem]'>
                <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687266701/upiqr_kuxznp.png" alt="" />
            </div>

            <div className='flex flex-col ml-[4rem] mt-[6.375rem] max-w-[325px]'>
                <div className='flex flex-col gap-[1.467rem]'>
                    <div>
                        <p className=' mb-0 font-AnekMalayalam  text-[20px] text-white leading-[28px] opacity-80'>MERCHANT NAME</p>
                        <p className=' mb-0 font-PlusJakartaSans text-white text-[24px] leading-[33px]'>VRIXAM AMRITAM SEVA SANSTHAN</p>
                    </div>
                    
                    <div className=' flex flex-col'>
                        <p className=' mb-0 font-AnekMalayalam text-[20px] text-white leading-[28px] uppercase opacity-80'>upi id</p>
                        <p className=' mb-0 font-PlusJakartaSans text-white text-[24px] leading-[33px]'>SANSTHANVRIXAM@SBI</p>
                    </div>
                </div>

                <div className=' mt-[3.667rem] flex flex-col gap-[1rem]'>
                    <p className=' text-white font-AnekMalayalam text-[18px] leading-[25px] opacity-80 mb-0'>We support secure transactions through</p>
                    <div className='flex items-center gap-[1rem]'>
                        <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/UPI-Logo-vector_1_upr5je.png" className=' w-[69px] h-[24px]' alt="" />
                        <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/Paytm_Logo__standalone_1_fttc5r.png" alt=" " className='w=[79px] h-[24px]' />
                        <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/google-pay-icon_1_bujlpn.png" alt="" className=' w-[33px] h-[28px]'/>
                        <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/phonepe-1_1_yduhcu.png" alt="" className=' w-[35px] h-[35px]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Donation