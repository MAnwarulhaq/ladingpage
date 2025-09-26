import React from 'react'
import logo1 from '../assets/logo7.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'

const OurClient = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[#4D4D4D] font-bold text-5xl'>Our Client</h1>
            <p className='text-[#4D4D4D] text-2xl my-5'>We have been working with some Fortune 500+ clients</p>
            <div className='flex justify-between items-center w-full my-5 p-12' >
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>
        </div>
    )
}

export default OurClient