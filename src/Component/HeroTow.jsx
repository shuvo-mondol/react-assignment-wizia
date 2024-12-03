import React from 'react'

function HeroTow() {
    const Data = [
        {
            id:1,
            title:`32%`,
            text: `Improvement in `,
            txt: `Open Rates`
        },
        {
            id:2,
            title:`75%`,
            text: `Improvement in `,
            txt: `Ramp Time`
        },
        {
            id:3,
            title:`35%`,
            text: `Improvement in `,
            txt: `Meetings Booked`
        },
    ];
  return (
    <>
        <section style={{
            backgroundImage: "url('/Images/hero2.png')",
            backgroundSize: 'cover',
            opacity: "0.5"
        }}
         className='flex flex-col md:m-10 m-6 py-6 md:py-14 lg:pl-28 md:pl-14 lg:gap-24 md:gap-16 gap-8 pl-3'
        >
         <div className='flex flex-col lg:gap-8 md:gap-6 gap-5'>
           <div>
           <h2 className='text-white lg:text-5xl md:text-4xl text-5xl'>Allocate effort where your reps </h2>
           <h2 className='text-white lg:text-5xl md:text-4xl text-5xl'>make an inpact.</h2>
           </div>
           <h3 className='text-[#0FF1F6] lg:text-5xl md:text-4xl text-4xl'>Let us handle the rest.</h3>
           <div>
            <p className='text-white lg:text-2xl md:text-base text-2xl'>Keep your reps “in the air” -- out in the field and on the phone </p>
            <p className='text-white lg:text-2xl md:text-base text-2xl'>where they can build relationships.</p>
           </div>
         </div>

         <div className='flex flex-col md:flex-row md:gap-8 md:max-w-[800px] gap-4'>
           {Data.map((data) => (
            <div key={data.id} className='flex flex-col md:gap-5 gap-0.5'>
                <h1 className='text-[#0FF1F6] md:text-5xl font-bold text-4xl'>{data.title}</h1>
                <div className='flex flex-row md:flex-col gap-1'>
                  <p className='text-white md:text-2xl text-xl'>{data.text}</p>
                   <p className='text-white md:text-2xl text-xl'>{data.txt}</p>
                </div>

            </div>
           ))

           }
         </div>
        </section>
    
    </>
  )
}

export default HeroTow;