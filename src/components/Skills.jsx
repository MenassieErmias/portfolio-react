import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Nodejs from '../assets/node.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
                <div className='grid grid-cols-2'>
                    <div className='sm:text-right'>
                        <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                    </div>
                    <div>

                    </div>
                </div>
                <p className='text-center text-2xl font-bold mt-3'>&lt;/&gt; Here are some of the technologies I have worked with.</p>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {/* TECHNOLOGY CARDS */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="html icon logo" />
                        <p className='text-bold pt-2'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="html icon logo" />
                        <p className='text-bold pt-2'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="html icon logo" />
                        <p className='text-bold pt-2'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="html icon logo" />
                        <p className='text-bold pt-2'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="html icon logo" />
                        <p className='text-bold pt-2'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="html icon logo" />
                        <p className='text-bold pt-2'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="html icon logo" />
                        <p className='text-bold pt-2'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="html icon logo" />
                        <p className='text-bold pt-2'>HTML</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills