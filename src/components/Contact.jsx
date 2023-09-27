import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300'>
            <form className='flex flex-col max-w[600px]' action="https://getform.io/f/4df9cc02-b3ee-4612-8389-6f71df6a5e24" method='POST'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                    <p className='py-4 text-lg'>&lt;/&gt; Submit the form below to conact me for business, or shoot me an email - menassieermias@gmail.com.</p>
                </div>
                <input className='p-2 bg-[#ccd6f6] text-black' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='E-Mail' name='email' />
                <textarea placeholder='Message...' className='bg-[#ccd6f6] p-2 text-black' cols={30} rows={10} name='message' ></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 py-3 px-4 my-8 mx-auto'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact