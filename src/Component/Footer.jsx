import React from 'react'
import Foot from "./footer.png";

function Footer() {
    const currentYear = new Date().getFullYear();
        
    
  return (
    <>
     <section className='bg-[#07292F]'>
     <div className='flex justify-between lg:py-8 lg:px-36 md:py-6 md:px-20 py-4 px-6'>
        <img src={Foot} alt="" />

        <div className='text-white md:text-base text-[9px]'>
            Copyright @ <span className='text-slate-500 font-semibold'>{currentYear}</span> Wizia. All rights reserved
        </div>
     </div>
     </section>
    </>
  )
}

export default Footer