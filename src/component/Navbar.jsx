import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div className='flex justify-around items-center p-5'>
            <img src={logo} alt="" />
        
                <ul className='flex justify-between items-center gap-3 text-lg'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Feature</li>
                    <li>Products</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>

                </ul>
                <div>
                    <button className='mr-2'>Login</button>
                    <button>
                        Sign up
                    </button>
                </div>
            
        </div> 
    )
}

export default Navbar