import Logo from '../assets/menassie-ermias-high-resolution-logo-white-on-transparent-background.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import { Link } from 'react-scroll'

const Navbar = ({ nav, setNav }) => {

    const handleClick = () => setNav(prev => !prev);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className=''>
                <img className="sm:w-[250px] w-[150px]" src={Logo} alt='logo' />
            </div>

            {/* MENU */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger Icon */}
            <div className='md:hidden z-10' onClick={handleClick}>
                {
                    !nav ? <FaBars /> : <FaTimes />
                }
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex  flex-col justify-center items-center"}>
                <li className='py-6 text-4xl'>
                    <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="work" smooth={true} duration={500} onClick={handleClick}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className='hidden fixed lg:flex flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center text-gray-300 w-full' target='_blank' href="https://www.linkedin.com/in/menassie-ermias-202b60200/">Linked In <FaLinkedin size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                        <a className='flex justify-between items-center text-gray-300 w-full' target='_blank' href="https://github.com/MenassieErmias">GitHub <FaGithub size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#117111]'>
                        <a className='flex justify-between items-center text-gray-300 w-full' target='_blank' href='/'>E-mail <HiOutlineMail size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900'>
                        <a className='flex justify-between items-center text-gray-300 w-full' target='_blank' href="/Resume/Menassie-Ermias.pdf" download>Resume <BsFillPersonLinesFill size={30} /> </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar