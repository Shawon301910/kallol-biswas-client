import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {

    const profession = ["WordPress & E-Commerce Expert", "Full Stack Developer", "Freelancer"];
    const links = ["Home", "About", "Resume", "Works", "Reviews"];

    const profileImgRef = useRef(null);
    const profileInfoRef = useRef(null);

    const [showLinks, setShowLinks] = useState(false);

    useGSAP(() => {
        const navTL = gsap.timeline();

        navTL.from(profileImgRef.current, { opacity: 0, scale: 0, duration: 1 });
        navTL.from(profileInfoRef.current, { opacity: 0, x: -50, duration: 0.7 }, "+0.3");
        navTL.from("#navVar li", { opacity: 0, y: -50, duration: 1, stagger: 0.1 });
    });

    return (
        <nav className="fixed top-0 max-w-screen-2xl mx-auto w-full py-2 backdrop-blur-md bg-ebony/50 z-50">
            <div className="w-full flex justify-between items-center px-1 sm:px-5 md:px-10 py-3">
                <div className="min-w-fit w-full flex items-center gap-2 sm:gap-3 lg:gap-5">
                    <div ref={profileImgRef} className="w-10 md:w-12 lg:w-14 xl:w-16 h-10 md:h-12 lg:h-14 xl:h-16 rounded-full z-10">
                        <img className="w-full h-full rounded-full object-cover" src="https://kallolbiswas.com/wp-content/uploads/2024/02/fiverr3-560x560.jpg" />
                    </div>
                    <div ref={profileInfoRef} className="z-0">
                        <div>
                            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white -mb-1">Kallol Biswas</h2>
                        </div>
                        <div className="text-pictonBlue text-xs md:text-sm lg:text-base xl:text-lg -mt-1">
                            <Typewriter
                                words={profession}
                                typeSpeed={30}
                                delaySpeed={2000}
                                deleteSpeed={30}
                                loop={true}
                                cursor={true}
                                cursorStyle="_"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden xl:block min-w-fit w-full">
                    <ul id="navVar" className="flex justify-end items-center gap-5 text-xl text-pictonBlue font-medium">
                        {
                            links.map((link, index) => (
                                <li key={index} className="relative px-3 py-2 before:absolute before:w-full before:h-0.5 before:bottom-0 before:left-0 before:bg-pictonBlue before:scale-x-0 before:origin-center before:duration-500 before:ease-out hover:before:scale-x-100 hover:cursor-pointer">
                                    {link}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="xl:hidden min-w-fit w-full flex justify-end items-center">
                    <div onClick={() => setShowLinks(!showLinks)} className="text-sm sm:text-lg md:text-xl lg:text-2xl text-pictonBlue w-12 lg:w-14 h-12 lg:h-14 rounded-full flex justify-center items-center cursor-pointer z-50">
                        {
                            showLinks ? <IoIosClose size={25} /> : <IoIosMenu size={25} />
                        }
                    </div>
                </div>
                <div className={`w-full sm:w-2/3 md:w-1/2 h-screen absolute top-0 ${showLinks ? "right-0 opacity-100" : "right-[-100%] opacity-0"} duration-1000 z-40 bg-black/70`}>
                    <div className="w-full h-full flex flex-col justify-center items-center gap-14 backdrop-blur-3xl">
                        <div className="w-full">
                            <ul className="flex flex-col justify-center items-center gap-2 text-xl text-pictonBlue font-medium">
                                {
                                    links.map((link, index) => (
                                        <li key={index} className="px-3 py-2 hover:cursor-pointer">
                                            {link}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="w-full h-[15vh]">
                            <div className="w-1/2 mx-auto">
                                <Link
                                    className="text-black flex justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full bg-pictonBlue before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-lg group"
                                >
                                    Talk To Me
                                    <svg
                                        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-white text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            className="fill-white group-hover:fill-gray-800"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;