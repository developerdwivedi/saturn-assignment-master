import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-white py-3 shadow-lg w-screen'>
         <div className='w-[80%]  flex justify-between items-center mx-auto'>
       <Image alt='svg' src='/assets/logo.svg' width={110} height={33} />
       <button className='border-[#B27E02] py-[5px] px-[15px] rounded-[7px] border-[1px] text-[14px] font-poppins font-normal'>Enquire Now</button>
    </div>
    </div>
 
  )
}

export default Navbar
