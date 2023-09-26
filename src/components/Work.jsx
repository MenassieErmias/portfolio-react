import WorkImg from '../assets/projects/realestate.jpg'
import WorkImg2 from '../assets/projects/workImg.jpeg'

const Work = () => {
    return (
        <div name='work' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 ">
                    <div className="grid grid-cols-2 mb-4">
                        <div className="text-right">
                            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
                        </div>
                        <div></div>
                    </div>
                    <p className="text-center">&lt;/&gt; Check out some of my recent work.</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* CARDS */}
                    {/* CARD 1 */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-100 text-center'>
                                <span className='w-full text-2xl font-bold tracking-wider text-center'>Real Estate React Project</span>
                                <div>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 1 */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-100 text-center'>
                                <span className='w-full text-2xl font-bold tracking-wider text-center'>Real Estate React Project</span>
                                <div>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 1 */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-100 text-center'>
                                <span className='w-full text-2xl font-bold tracking-wider text-center'>Real Estate React Project</span>
                                <div>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 1 */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-100 text-center'>
                                <span className='w-full text-2xl font-bold tracking-wider text-center'>Real Estate React Project</span>
                                <div>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 1 */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-100 text-center'>
                                <span className='w-full text-2xl font-bold tracking-wider text-center'>Real Estate React Project</span>
                                <div>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 1 */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-100 text-center'>
                                <span className='w-full text-2xl font-bold tracking-wider text-center'>Real Estate React Project</span>
                                <div>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work