import React from 'react'
import Arrow from "./arrow.jpg";



function Last() {
  return (
    <>
        <section>
            <div className='flex flex-col lg:gap-6 md:gap-5 gap-6 items-center md:py-16 py-8 pl-14 pr-8 justify-center'>
                <h2 className='text-[#0FF1F6] lg:text-3xl md:text-2xl text-xl'>GET STARTED</h2>
                <h2 className='text-white lg:text-6xl md:text-4xl text-5xl italic'>Embrace <span className='font-bold'>the new era of</span> outbound.</h2>
                <div className='flex flex-col items-center'>
                    <p className='text-white lg:text-3xl md:text-base text-xl'>Wizia lets you train, activate, and optimize aiDRs.</p>
                    <p className='text-white lg:text-3xl md:text-base text-xl'>Take your outbound to new levels of performance and efficiency.</p>


                </div>
                <div className='flex gap-1 bg-[#0FF1F6] md:w-48 w-60 lg:px-3 rounded-full justify-center items-center md:px-4 md:py-1.5 px-2 cursor-pointer hover:bg-green-300 '>
                    <span className='text-[#002228] text-[10px] md:text-[13px] lg:text-[16px] '>Sign Up for the Beta</span>
                    <img src={Arrow} alt=""className='rounded-lg py-1'/>
                </div>
                
                
            </div>
        </section>
    
    </>
  )
}

export default Last;