import Logo from '../assets/menassie-ermias-high-resolution-logo-white-on-transparent-background.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(prev => !prev);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className=''>
                <img className="w-[250px]" src={Logo} alt='logo' />
            </div>

            {/* MENU */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger Icon */}
            <div className='md:hidden z-10' onClick={handleClick}>
                {
                    !nav ? <FaBars /> : <FaTimes />
                }
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex  flex-col justify-center items-center"}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
            {/* Social icons */}
            <div className='hidden fixed lg:flex flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center text-gray-300 w-full' href="/">Linked In <FaLinkedin size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                        <a className='flex justify-between items-center text-gray-300 w-full' href="/">GitHub <FaGithub size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#117111]'>
                        <a className='flex justify-between items-center text-gray-300 w-full' href="/">Linked In <HiOutlineMail size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900'>
                        <a className='flex justify-between items-center text-gray-300 w-full' href="/">Resume <BsFillPersonLinesFill size={30} /> </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar