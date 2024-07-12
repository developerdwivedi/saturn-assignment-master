import React from 'react'
import Button from './Commons/Button'
import Image from 'next/image'
import Ammenities from './Commons/Ammenities'

function LargeScreenCard() {
  return (
<div className='w-full  rounded-[20px] grid p-5 bg-white h-[max-content] mt-5 '>

        <div className='flex  justify-end w-full'>
            <div className='shadow-custom w-[40px] h-[40px] flex justify-center items-center rounded-full'>
            <Image alt='svg' src='/assets/cancel.svg' width={18} height={18} />
            </div>
        </div>

 <div className='flex gap-5 items-start'>
         {/* Gallery */}
         <div className='w-[40%] xl:w-full  grid gap-5 border'>
            <div className='w-full h-[507px] border relative'><Image src='/assets/image.png'  alt='maps' layout='fill' className='w-[100%] h-[100%]'/></div>
            <div className='flex gap-5 justify-between'>
           <div className='w-full h-[161px] border relative'><Image src='/assets/image2.jpg'  alt='maps' layout='fill' className='w-[100%] h-[100%]'/></div>
           <div className='w-full h-[161px] border relative'><Image src='/assets/image3.jpg'  alt='maps' layout='fill' className='w-[100%] h-[100%]'/></div>
           <div className='w-full h-[161px] border relative'><Image src='/assets/image4.png'  alt='maps' layout='fill' className='w-[100%] h-[100%]'/></div>
            </div>
         </div>
         {/* Content */}
         <div className='w-[60%] xl:w-full grid'>
           <div className='grid gap-5'>
           <p className='text-[20px] font-[400] text-[#272727] font-poppins'>Tangled Up In Green</p>
           <p className='text-[20px] font-[400] text-[#272727] font-poppins'>Tangled Up In Green</p>
           </div>
           <div className='py-5 border-b-[1px] border-[#ABABAB]'>
            <p className='text-[14px] font-[300] text-start font-poppins text-[#707070] leading-custom-24'>Tangled Up In Green, a vision of Total Environment, is a luxury plotted development nestled amidst the lush landscapes of Devanahalli. This peaceful hideaway in North Bangalore sits on 115 acres and has exclusive residential plots with a modern design and green living blend. The plots range from 1800 sq. ft. to 7200 sq. ft. You could be fascinated by the botanical wonders found at the Tree Museum or…</p>
           </div>
           <div className='flex items-start gap-5  mt-5'>
            <div className='grid w-[60%]   '>
               <div className='grid w-full  '>
                  <div className='flex items-center '>
                     <div className='grid gap-2.5 border-r-[1.5px] border-[#EEEEEE] items-start w-1/3 h-full pr-5 '>
                        <p className='text-[#B27E02] font-medium text-[18px] xl:text-[20px] font-poppins '>₹ 1.4 Cr</p>
                        <p className='text-[12px] text-[#6B6B6B] font-[400] font-poppins'>(₹ 6,990 / Sq  Ft )</p>
                     </div>
                     <div className='grid gap-2.5 border-r-[1.5px] border-[#EEEEEE] h-full  w-1/3 px-5 '>
                       <div className='flex gap-2 items-center'>
                        <Image alt='svg' src='/assets/plot.svg' width={25} height={25} />
                       <p className='text-[#B27E02] font-medium text-[18px] xl:text-[20px] font-poppins '>Plot Size</p>
                       </div>
                        <p className='text-[12px] text-[#6B6B6B] font-[400] font-poppins'>1,800 to 7,200 Sq Ft</p>
                     </div>
                     <div className='grid gap-2.5  w-1/3 h-full px-5'>
                        <div className='flex gap-2 items-center'>
                        <Image alt='svg' src='/assets/size.svg' width={25} height={25} />
                        <p className='text-[#B27E02] font-medium text-[18px] xl:text-[20px] font-poppins '>Area</p>
                        </div>
                        <p className='text-[12px] text-[#6B6B6B] font-[400] font-poppins'>115 Acres</p>
                     </div>
                  </div>
                  <div className='border-[#EEEEEE] border-t-[1.5px] w-full my-2.5'></div>
                  <div className='flex'>
                     <div className='grid  border-r-[1.5px] border-[#EEEEEE] items-center h-full  w-1/3 pr-5 '>
                        <p className='text-[14px] font-[400] text-[#080808]'>Total Units</p>
                        <p className='text-[12px] font-[400] text-[#7E7E7E]'>968</p>
                     </div>
                     <div className='grid  border-r-[1.5px] border-[#EEEEEE] h-full  w-1/3  px-5'>
                        <p className='text-[14px] font-[400] text-[#080808]'>Project Type</p>
                        <p className='text-[12px] font-[400] text-[#7E7E7E]'> Plotted Development</p>
                     </div>
                     <div className='grid  h-full w-1/3  px-5'>
                        <p className='text-[14px] font-[400] text-[#080808]'>Status</p>
                        <p className='text-[12px] font-[400] text-[#7E7E7E]'> Newly Launched</p>
                     </div>
                  </div>
                  <div className='border-[#ABABAB] border-t-[1px] w-full mt-5'></div>

               </div>
             <div>
                <Ammenities />
             </div>
            </div>
            <div className='w-[40%]  h-full border'>
                <Image src='/assets/map.png'  alt='maps' width={315} height={409} className='w-[100%] h-full rounded-md'/>
            </div>
           </div>
           <div className='w-full flex gap-5 my-5'>
            <div className='w-[27%]'><Button  buttonText='Chat Now' outline={true}/></div>
            <div className='w-[27%]'><Button  buttonText='Call Now' outline={true}/></div>
            <div className='w-[45%]'><Button  buttonText='Schedule Site Visit' outline={false}/></div>
           </div>
        </div>
 </div>
      
    </div>
  )
}

export default LargeScreenCard
