import React from 'react'
import logo1 from '../assets/logo7.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import rafiki from '../assets/rafiki.png'


const OurClient = () => {
    return (
        <div className='flex flex-col justify-center items-center p-5'>
            <h1 className='text-[#4D4D4D] font-bold text-5xl'>Our Client</h1>
            <p className='text-[#4D4D4D] text-2xl my-5'>We have been working with some Fortune 500+ clients</p>
            <div className='flex flex-wrap justify-between items-center w-full my-5 p-12' >
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>
            <p className='text-[#4D4D4D] text-3xl text-center'>Manage your entire community <br /> in a single system</p>
            <p className='text-[#4D4D4D]'>Who is Nextcent suitable for?</p>
            <div className='flex flex-wrap justify-between items-center mt-5 w-full'>
                <div className='flex flex-col items-center w-70  justify-center space-y-3'>
                    <img src={icon1} alt="" />
                    <h1 className='text-[#4D4D4D] text-4xl text-center'>Membership<br />Organisations</h1>
                    <p className='text-[#717171]  text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                 <div  className='flex flex-col items-center w-70  justify-center'>
                    <img src={icon2} alt="" />
                    <h1  className='text-[#4D4D4D] text-4xl text-center'>National <br /> Associations</h1>
                    <p className='text-[#717171]  text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                 <div  className='flex flex-col items-center w-70  justify-center'>
                    <img src={icon3} alt="" />
                    <h1  className='text-[#4D4D4D] text-4xl text-center'>Clubs And <br /> Groups</h1>
                    <p className='text-[#717171]  text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
            <div className='flex flex-wrap  justify-center items-center w-full'>
                <div className='w-full'>
                     <img src={rafiki} alt="" />
                </div>
               
                <div className='w-full'>
                    <h1>The unseen of spending three years at Pixelgrade</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
        
    )
}

export default OurClient