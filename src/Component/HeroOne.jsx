import React from 'react'
import Tik from "./Photos/tik.png";
function HeroOne() {
    const Heros = [
        {
            id:1,
            image: Tik,
            title:`Quick to ramp`,
        },
        {
            id:2,
            image: Tik,
            title:`Easy to optimize`,
        },
        

    ];

    const Tow = [
        {
            id:3,
            image: Tik,
            title:`Quick to scale up`,
        },
        {
            id:4,
            image: Tik,
            title:`Works with all your existing tools`,
        },
    ];
  return (
    <>
        <section style={{
                backgroundImage: "url('/Images/BG.png')",
                backgroundSize: 'cover',
                opacity: "0.5"
            }}
             className='md:m-14 m-6 rounded-3xl'
            >
                <div className='flex flex-col lg:gap-8 md:gap-6 items-center justify-center md:py-20 py-10 gap-4'>
                    <div className=''>
                        <h2 className='text-white lg:text-5xl md:text-4xl font-bold text-2xl'>Train your aiDR on your...</h2>
                        <h3 className='text-[#0FF1F6] lg:text-5xl md:text-4xl text-2xl'>prefered email st|</h3>
                    </div>
                    <div>
                        <p className='text-slate-300 lg:text-3xl md:text-2xl  text-[16px]'>You’re in control. Train your aiDR on</p>
                        <p className='text-slate-300 lg:text-3xl md:text-2xl text-[16px]'> elements of your Marketing strategy.</p>
                    </div>
                    <div className='lg:pt-8 md:pt-6 flex flex-col lg:gap-8 md:gap-5 pt-4 gap-3'>
                       <div className='flex md:flex-row flex-col lg:gap-16 md:gap-8 gap-3'>
                       {Heros.map((hero) =>(
                            <div key={hero.id} className='flex md:gap-2 items-center'>
                                <img src={hero.image} alt="" className='lg:w-[32px]' />
                                <h2 className='text-[#14BCB2] lg:text-xl md:text-sm'>{hero.title}</h2>
                            </div>
                        ))}
                       </div>
                       <div className='flex md:flex-row flex-col lg:gap-16 md:gap-8 gap-3'>
                       {Tow.map((tow) =>(
                            <div key={tow.id} className='flex md:gap-2 items-center'>
                                <img src={tow.image} alt="" className='lg:w-[32px]' />
                                <h2 className='text-[#14BCB2] lg:text-xl md:text-sm'>{tow.title}</h2>
                            </div>
                        ))}
                       </div>
                    </div>
                </div>

        </section>
    
    </>
  )
}

export default HeroOne;