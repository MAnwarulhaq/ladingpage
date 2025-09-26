import React from 'react'
import rightImg from '../assets/rightimg.png'
const HeroSection = () => {
  return (
    <div className='flex justify-around items-center gap-10'>
        <div>
            <h1 className='text-[#4D4D4D] text-6xl'>Lessons and insights <br />
             <span className='text-[#4CAF4F]'>from 8 years</span> </h1>
             <br/>
            <p className='text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
        </div>
        <img src={rightImg} alt="" />
    </div>
  )
}

export default HeroSection