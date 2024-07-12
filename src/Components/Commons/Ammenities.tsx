import React from 'react'
import { amenities } from '../Data/ammenities'
import Image from 'next/image'

function Ammenities() {
  return (
    <div className='font-poppins'>
        <p className='text-[#272727] font-[400]  text-[20px] py-5 flex'>30+ Amenities</p>
        <div className=' flex text-[#7E7E7E] font-[300] text-[14px] justify-between'>
      <div>
        {amenities.slice(0,4).map((item,index)=>(
        <div className='flex items-center gap-2.5 mb-2.5'>
           <div className='bg-[#FFF2D0] rounded-[8px] p-[7px]'>
           <Image alt='svg' src={item.icon} width={22} height={22} />
           </div>
           <p className='font-light font-poppins text-[14px] text-[#7E7E7E]'> {item.title}</p>
        </div>
        ))}
      </div>
      <div>
        {amenities.slice(4).map((item,index)=>(
        <div className='flex items-center gap-2.5 mb-2.5'>
            <div className='bg-[#FFF2D0] rounded-[8px] p-[7px]'>
            <Image alt='svg' src={item.icon} width={22} height={22} />
           </div>
           <p className='font-light font-poppins text-[14px] text-[#7E7E7E]'> {item.title}</p>
        </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Ammenities
