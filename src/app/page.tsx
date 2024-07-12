"use client"

import Navbar from "@/Components/Commons/Navbar";
import LargeScreenCard from "@/Components/LargeScreenCard";
import SmallScreenCard from "@/Components/SmallScreenCard";


export default function Home() {
  return (
<>
<div className="hidden md:flex px-[24px] xl:px-[48px] w-screen h-screen relative">
     <LargeScreenCard /> 
</div>
<div className="grid md:hidden h-full gap-2.5 bg-[#F4F8FB]">
    <Navbar />
     <SmallScreenCard /> 
</div></>
  );
}
