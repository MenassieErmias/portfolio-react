import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import Typed from 'react-typed';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Home = ({ nav }) => {
    return (
        <div name="home" className='bg-[#0a192f] w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center'>
                <p className='text-white '>Hi, My name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Menassie Ermias</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#83777e]'>
                    I am a&nbsp;
                    {/* <Typed strings={["Front end developer", "UI/UX Designer", "Freelancer"]} typeSpeed={100} backSpeed={100} loop /> */}
                    {!nav && <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Front end developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'UI/UX Designer',
                            1000,
                            'Freelancer',
                            1000
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                        style={{ caretColor: 'transparent' }}
                    />}
                </h2>
                <p className='text-[#83777e] max-w-[700px] py-4'>I'm a web designer and developer. I am primarily a frontend developer, but I have a little experience with backend development as well.</p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#83777e] hover:border-[#83777e] group'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className="ml-2" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home