import React, { useState } from 'react';

function Footer() {
    const [a, b] = useState("Movies");
    const [c, d] = useState("Music");
    const [e, f] = useState("Downloads");
    const [g, h] = useState("On-Demand");
    const [i, j] = useState("ExpertAdvice");
    const [k, l] = useState("Community");
    const [m, n] = useState("StartSpeak");
    const [o, p] = useState("Offers & Promo");
    const [q, r] = useState("@Copyright 2009, Created by Rythem Bangia");

    return (
      <div id="section4" className='flex justify-center items-center flex-col'>
    <div className='bg-red-900 h-[10rem] w-[80%]  mt-[10rem] relative rounded-t-lg max-lg:hidden'>
        <div className='absolute top-0 left-0 right-0 bottom-0 mx-auto w-[80%] h-[15rem] flex justify-center items-center'>
            <div className='text-white font-mono font-semibold'>
                {a}
            </div>
            <div className='mx-2 text-white font-mono font-semibold'>::</div>
            <div className='text-white font-mono font-semibold'>
                {c}
            </div>
            <div className='mx-2 text-white font-mono font-semibold'>::</div>
            <div className='text-white font-mono font-semibold'>
                {e}
            </div>
            <div className='mx-2 text-white font-mono font-semibold'>::</div>
            <div className='text-white font-mono font-semibold'>
                {g}
            </div>
            <div className='mx-2 text-white font-mono font-semibold'>::</div>
            <div className='text-white font-mono font-semibold'>
                {i}
            </div>
            <div className='mx-2 text-white font-mono font-semibold'>::</div>
            <div className='text-white font-mono font-semibold'>
                {k}
            </div>
            <div className='mx-2 text-white font-mono font-semibold'>::</div>
            <div className='text-white font-mono font-semibold'>
                {m}
            </div>
            <div className='mx-2 text-white font-mono font-semibold'>::</div>
            <div className='text-white font-mono font-semibold'>
                {o}
            </div>
        </div>
    </div>
            <div className='bg-red-950 h-[8rem] w-full flex justify-center items-center gap-4 max-lg:mt-[3rem]'>
                <img src="/Entertainment Live.png" alt="" />
                <div className='text-amber-100 font-medium'>
                    {q}
                </div>
            </div>
        </div>
    );
}

export default Footer;
