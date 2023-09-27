import Notflix from '../assets/projects/notflix.png';
import LandingSite from '../assets/projects/landing-site.png';
import TravelSite from '../assets/projects/travel-site.png';

const Work = () => {
    return (
        <div id="work" name='work' className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center">
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
                    <div style={{ backgroundImage: `url(${Notflix})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-80 text-center duration-500'>
                                <span className='w-full text-2xl font-bold tracking-wider text-center'>Notflix</span>
                                <div>
                                    <a target='_blank' href="https://netflix-react-14ded.web.app/">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a target='_blank' href="https://github.com/MenassieErmias/netflix">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 2 */}
                    <div style={{ backgroundImage: `url(${LandingSite})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-80 text-center duration-500'>
                                <span className='w-full text-2xl font-bold tracking-wider text-center'>Landing site</span>
                                <div>
                                    <a target='_blank' href="https://peppy-sherbet-385817.netlify.app/">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a target='_blank' href="https://github.com/MenassieErmias/landing-page">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 3 */}
                    <div style={{ backgroundImage: `url(${TravelSite})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-80 text-center duration-500'>
                                <span className='w-full text-2xl font-bold tracking-wider text-center'>Travel Site</span>
                                <div>
                                    <a target='_blank' href="https://651470e5fc953b2afee72ec2--deft-taffy-845873.netlify.app/">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a target="_blank" href="https://github.com/MenassieErmias/travel-site-react">
                                        <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Row Two lg */}
                    {/* CARD 1 */}
                    {/* <div style={{ backgroundImage: `url(${Notflix})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-80 text-center duration-500'>
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
                    </div> */}
                    {/* CARD 1 */}
                    {/* <div style={{ backgroundImage: `url(${Notflix})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-80 text-center duration-500'>
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
                    </div> */}
                    {/* CARD 1 */}
                    {/* <div style={{ backgroundImage: `url(${Notflix})` }} className="shadow-lg shadow-[#040316] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div>
                            <div className='opacity-0 group-hover:opacity-80 text-center duration-500'>
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Work