import React from 'react'

import Arrow from "./arrow.jpg";
function Image() {
  return (
    <>
        <section  >
            <div style={{
                backgroundImage: "url('/Images/image 2.jpg')",
                backgroundSize: 'cover',
                opacity:'0.4'
            }}
            className=' flex flex-col lg:gap-6 md:gap-3 gap-2 md:pt-24 lg:pt-32 pt-12 lg:pl-64 md:pl-32 justify-center items-center md:justify-start md:items-start md:pb-10 pb-6'
            >
                <h3 className='text-[#0FF1F6] lg:text-[20px] md:text-base text-[10px]'>AI SDRs (aiDRs)</h3>
                <h2>
                    <p className='lg:text-6xl text-[28px] md:text-4xl text-white'><span className='font-bold'>More</span> leads,</p>
                    <p className='lg:text-6xl text-[28px] md:text-4xl text-white'><span className='font-bold'>less</span> people.</p>
                </h2>
                <div>
                <p className='text-slate-400 lg:text-base md:text-[14px] text-[10px] '>Train an aiDR on your ICP and messaging matrix.</p> 
                  <p className='text-slate-400 lg:text-base md:text-[14px] text-[10px] '>Activate it on a patch. It will send personalized </p>
                   <p className='text-slate-400 lg:text-base md:text-[14px] text-[10px] '>sequences to every target contact.</p>
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

export default Image;