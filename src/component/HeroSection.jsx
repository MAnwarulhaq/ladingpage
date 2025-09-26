import React from 'react'
import rightImg from '../assets/rightimg.png'
const HeroSection = () => {
  return (
    <div className='flex flex-wrap justify-around items-center gap-10 p-5'>
        <div>
            <h1 className='text-[#4D4D4D] text-2xl lg:text-6xl'>Lessons and insights <br />
             <span className='text-[#4CAF4F]'>from 8 years</span> </h1>
             <br/>
            <p className='text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
            <button className='bg-[#4CAF4F] w-40 h-10 text-white my-5 rounded'>Register</button>
        </div>
        <img src={rightImg} alt="" />

    </div>
  )
}

export default HeroSection