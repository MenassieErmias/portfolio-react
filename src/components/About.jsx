

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full p-x-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="max-w-[1000px] w-full p-x-4 grid sm:grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl sm:text-right font-bold">Hi! I am Menassie, nice to meet you. Please, take a look around.</p>
                    </div>
                    <div>
                        <p className="px-4">
                            I am an aspiring web developer, with a passion for developing problem solving Softwares. I mainly work on web sites but also have experience building well deisgned and highly interactive apps. Check out my expertise in skills section of this page. What can we build together?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About