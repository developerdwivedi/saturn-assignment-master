import Image from 'next/image'
import React from 'react'
import Ammenities from './Commons/Ammenities'
import Button from './Commons/Button'
import CarouselComponent from './Commons/CarouselComponent'

function SmallScreenCard() {
  return (
    <div className='w-screen bg-white'>
      {/* carousel */}
      <div className='mb-6 '>
<CarouselComponent />
      </div>

      {/* Content */}
      <div className='grid gap-5 w-[85%] mx-auto '>
    <div className='grid gap-2.5'>
    <p className='text-[20px] font-[400] text-[#272727] font-poppins'>Tangled Up In Green</p>
    <p className='text-[12px] font-[300] text-start font-poppins text-[#707070] leading-custom-24'>Tangled Up In Green, a vision of Total Environment, is a luxury plotted development nestled amidst the lush landscapes of Devanahalli. This peaceful hideaway in North Bangalore sits on 115 acres and has exclusive residential plots with a modern design and green living blend. The plots range from 1800 sq. ft. to 7200 sq. ft. You could be fascinated by the botanical wonders found at the Tree Museum or…</p>
    </div>
  <div className='grid gap-5 font-poppins mt-2.5'>
  <div className='flex justify-between'>
      <div className='flex gap-1 w-1/2'>
      <Image alt='svg' src='/assets/rupee.svg' width={35} height={35} className='w-[35px] h-[35px]' />
      <div className='grid text-start text-[#575757] text-[12px] font-bold'>
        <p>1.4Cr</p>
        <p>onwards (₹ 6990/sq.ft.)</p>
      </div>
      </div>
      <div className='flex gap-1 w-1/2 pl-2.5'>
      <Image alt='svg' src='/assets/plot.svg' width={35} height={35} className='w-[35px] h-[35px]' />
      <div className='grid text-start text-[#575757] text-[12px] font-bold'>
        <p>Plot size 1800 sq.</p>
        <p>ft. to 7200 sq. ft.</p>
      </div>
      </div>
    </div>
    <div className='flex justify-between'>
      <div className='flex gap-1 w-1/2'>
      <Image alt='svg' src='/assets/size.svg' width={35} height={35} className='w-[35px] h-[35px]' />
      <div className='grid text-start text-[#575757] text-[12px] font-bold'>
        <p>Area 115 Acres &</p>
        <p>16 Guantas</p>
      </div>
      </div>
      <div className='flex gap-1 w-1/2 pl-2.5'>
      <Image alt='svg' src='/assets/unit.svg' width={35} height={35} className='w-[35px] h-[35px]' />
      <div className='grid text-start text-[#575757] text-[12px] font-bold'>
        <p>Total</p>
        <p>Units 968</p>
      </div>
      </div>
    </div>
  </div>
      </div>
      <div className='border-b-[1px] border-[#ABABAB] mt-6'>
      </div>

      {/* Bottom */}
     <div className=' '>
     <div className='shadow-custom fixed bottom-[40px] w-full bg-white py-[19px]'>
    <div className='w-[85%] mx-auto flex justify-between gap-5'>
    <Button buttonText='Know More' outline={true} />
    <Button buttonText='Schedule site visit' outline={false}/>
    </div>
      </div>
     <div className='w-[85%] mx-auto grid gap-5 mb-5 '>
     <Ammenities />
     </div>
      <div>
      <Image alt='svg' src='/assets/map.png' width={200} height={500} className='w-[100%] h-[504px]' />
      </div>

     </div>
    </div>
  )
}

export default SmallScreenCard
