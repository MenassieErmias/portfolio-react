import React from 'react';
import Logo from '../assets/menassie-ermias-high-resolution-logo-white-on-transparent-background.png'

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className=''>
                <img className="h-[50px]" src={Logo} alt='logo' />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar