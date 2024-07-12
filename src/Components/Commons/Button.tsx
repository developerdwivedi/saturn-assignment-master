import React from 'react';
import { ButtonProps } from '../Types';
import { Inter,Poppins } from "next/font/google";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

function Button({buttonText,outline,customClass,onClick}:ButtonProps) {
  return (
    <div 
    onClick={onClick}
    className={`${outline ? 'text-[#B27E02] font-[400] border-[1px] border-[#B27E02]' : 'text-white font-[500] md:font-[600] bg-[#B27E02] '} text-center text-[16px]  w-full py-[9px] rounded-[7px]`}>
      {buttonText}
    </div>
  )
}

export default Button;
