import React from 'react'
import Amd from "./Photos/amd.png";
import Back from "./Photos/back.png";
import Cable from "./Photos/cable.png";
import Euro from "./Photos/euro.png";
import Group from "./Photos/Group.png";

function Banner() {
  return (
    <>
     <section className='bg-[#07292F]'>
        <div className='flex flex-col items-center justify-center lg:gap-8 pt-8 pb-10'>
            <h2 className='text-[#0FF1F6] md:text-base text-sm'>OUR TRUSTED PARTNERS</h2>
           <div className='flex md:flex-row flex-col items-center lg:gap-40 md:gap-14 gap-6'>
             <div className='grid md:grid-flow-col md:grid-cols-1  items-center grid-cols-2 lg:gap-40 md:gap-14 gap-6'>
               <img src={Back} alt="" />
               <img src={Cable} alt="" />
               <img src={Group} alt="" />
               <img src={Euro} alt="" />
               
                
             </div>
             <img src={Amd} alt="" className='lg:w-[140px] md:w-[120px] w-[120px]'/>
           </div>
        </div>
     </section>
    
    </>
  )
}

export default Banner;