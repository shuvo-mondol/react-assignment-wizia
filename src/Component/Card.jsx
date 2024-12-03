import React from 'react'
import Card1 from "./Photos/card1.png";
import Card2 from "./Photos/card2.png";
import Card3 from "./Photos/card3.png";

function Card() {
    const Cards = [
        {
            id: 1,
            image: Card1,
            title: `You're in Control`,
            para: `aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.`

        },
        {
            id: 2,
            image: Card2,
            title: `Infinitely Scalable`,
            para: `Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.`

        },
        {
            id: 3,
            image: Card1,
            title: `Incredibly Flexible`,
            para: `Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.`

        },

    ];
  return (
    <>
    <div className='flex md:flex-row flex-col lg:px-48 lg:py-28 lg:gap-64 md:px-28 md:py-14 md:gap-20 px-12 py-8 gap-12'>
        
           {Cards.map((item) => (
            <div key={item.id} className='flex flex-col lg:gap-6 md:gap-4 gap-2'>
                <img src={item.image} alt="" className='lg:w-14 md:w-10 w-8'/>
                <h2 className='text-white lg:text-3xl font-bold md:text-2xl text-xl '>{item.title}</h2>
                <p className='text-slate-400 lg:text-xl md:text-sm text-[16px]'>{item.para}</p>
            </div>
           ))}
        

    </div>
    
    </>
  )
}

export default Card;