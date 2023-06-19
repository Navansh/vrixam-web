import React from 'react'
import highlights_data from '../data/Highlights-data'
const Highlights = () => {
  return (
    <div className='csshighlights max-w-[1440px] mx-auto'>
        <p className=' font-NoeStandard text-[36px] leading-[49px] text-[#171717]'>In the highlights</p>
        <div className=' flex gap-8'>
            <div className=' flex flex-col bg-[#E6F0EA] rounded-md max-w-[584px]'>
                <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687199050/highlights_1_wak8ro.png" height="343px" alt="" />
                <div className=' flex flex-col highlightscard gap-3'>
                    <h2 className=' font-AnekMalayalam text-[28px] mb-0 leading-10 uppercase text-[#006C2C]'>Gift the World a Tree</h2>
                    <div className='flex flex-col gap-2'>
                        <p className=' mb-0 font-PlusJakartaSans text-[15px] leading-6 text-[#2D2D2D]'>
                            Spread the message over planting a sapling on the special 4 occasions in one’s life
                        </p>
                        <ul className='flex flex-wrap gap-x-8 '>
                            <li style={{ listStyleType: 'disc'}} className=' font-PlusJakartaSans text-[15px] leading-6'>When a girl child takes birth</li>
                            <li style={{ listStyleType: 'disc'}} className=' font-PlusJakartaSans text-[15px] leading-6'>On birthday</li>
                            <li style={{ listStyleType: 'disc'}} className=' font-PlusJakartaSans text-[15px] leading-6'>Marriage Anniversaries</li>
                            <li style={{ listStyleType: 'disc'}} className=' font-PlusJakartaSans text-[15px] leading-6'>Tribute to Loved Ones in Heaven</li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>

            {/* next side */}
            <div className=' flex flex-col gap-3'>
                {
                    highlights_data.map((item, index) => {
                        return (
                            <div className='flex '>
                                <div className="w-[235px]" >
                                    <img src={item.url} alt="" className=' object-cover rounded-md'/>
                                </div>
                                <div className=' flex flex-col'>
                                    <h2 className=' font-AnekMalayalam text-[28px] mb-0 leading-10 uppercase text-[#006C2C]'>{item.title}</h2>
                                    <p className=' mb-0 font-PlusJakartaSans text-[15px] leading-6 text-[#2D2D2D]'>{item.subtitle}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Highlights