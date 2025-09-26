import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div className='flex flex-wrap justify-around items-center p-5 bg-[#F5F7FA]'>
            <img src={logo} alt="" />
        
                <ul className='flex flex-wrap justify-between items-center gap-3 text-lg'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Feature</li>
                    <li>Products</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>

                </ul>
                <div>
                    <button className='mr-2 text-[#4CAF4F]'>Login</button>
                    <button className='bg-[#4CAF4F] text-white w-20 h-10 rounded-lg'>
                        Sign up
                    </button>
                </div>
            
        </div> 
    )
}

export default Navbar