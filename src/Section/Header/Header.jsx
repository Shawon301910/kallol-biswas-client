import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const Header = () => {

    const secondWordRef = useRef(null);
    const thirdWordRef = useRef(null);

    useGSAP(() => {

        const headerTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#header-word-container",
                start: "top top",
                end: "bottom center",
                scrub: .5,
            }
        });

        gsap.from("#header-word-container .header-word", {
            opacity: 0,
            x: -100,
            duration: 1,
            stagger: 0.2,
            delay: 1
        })
        gsap.from(".header-bg, .header-social", {
            opacity: 0,
            scale: 0,
            duration: 1,
            delay: 1.5
        })

        headerTL.to(secondWordRef.current, {
            x: "10%",
        }, "sameHeader")
        headerTL.to(thirdWordRef.current, {
            x: "50%",
        }, "sameHeader")
        headerTL.to(".header-social", {
            y: "-200%",
        }, "sameHeader")
    });

    return (
        <div>
            <div className="relative w-full h-[60vh] sm:h-screen flex justify-center items-center overflow-hidden">
                <div id="header-word-container" className="w-full h-full flex flex-col justify-center text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-white px-2 sm:px-5 lg:px-10 pt-10 lg:pt-20 backdrop-blur-3xl z-10">
                    <div style={{ textShadow: "3px 3px 6px #38BDF8" }} className="header-word">
                        <h1>WordPress &</h1>
                    </div>
                    <div style={{ textShadow: "3px 3px 6px #38BDF8" }} ref={secondWordRef} className="header-word">
                        <h1>E-Commerce</h1>
                    </div>
                    <div style={{ textShadow: "3px 3px 6px #38BDF8" }} ref={thirdWordRef} className="header-word">
                        <h1>Expert</h1>
                    </div>
                </div>
                <div className="hidden xl:block header-bg absolute top-20 left-40 w-80 h-96 rounded-full backdrop-blur-md bg-pictonBlue/30 animate-header-bg-bounce"></div>
                <div className="header-bg absolute bottom-24 lg:bottom-28 right-52 w-80 h-96 rounded-full backdrop-blur-md bg-pictonBlue/30 animate-header-bg-spin"></div>
                <div className="hidden sm:block header-social absolute w-fit h-fit bottom-5 lg:bottom-10 xl:bottom-20 right-5 lg:right-10 xl:right-20 z-30">
                    <div className="relative w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 text-white animate-social-spin z-10">
                        <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="w-full h-full rounded-full bg-pictonBlue/30 flex justify-center items-center hover:cursor-pointer -animation-social-spin z-40">
                                <span className="text-xl backdrop-blur-3xl"><FaLink /></span>
                            </div>
                        </div>
                        <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[60deg]">
                            <div className="w-full h-full flex justify-between items-center">
                                <Link target="_blank" className="w-7 md:w-9 lg:w-10 h-7 md:h-9 lg:h-10 rounded-full bg-[#0866FF]/30 flex justify-center items-center -rotate-90">
                                    <span><FaFacebookF /></span>
                                </Link>
                                <Link target="_blank" className="w-7 md:w-9 lg:w-10 h-7 md:h-9 lg:h-10 rounded-full bg-[#1DA1F2]/30 flex justify-center items-center rotate-90">
                                    <span><FaTwitter /></span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[120deg]">
                            <div className="w-full h-full flex justify-between items-center">
                                <Link target="_blank" className="w-7 md:w-9 lg:w-10 h-7 md:h-9 lg:h-10 rounded-full bg-[#E336BA]/30 flex justify-center items-center -rotate-90">
                                    <span><FaInstagram /></span>
                                </Link>
                                <Link target="_blank" className="w-7 md:w-9 lg:w-10 h-7 md:h-9 lg:h-10 rounded-full bg-[#30D14E]/30 flex justify-center items-center rotate-90">
                                    <span><FaWhatsapp /></span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-full h-full flex justify-between items-center">
                                <Link target="_blank" className="w-7 md:w-9 lg:w-10 h-7 md:h-9 lg:h-10 rounded-full bg-[#000]/30 flex justify-center items-center -rotate-90">
                                    <span><FaGithub /></span>
                                </Link>
                                <Link target="_blank" className="w-7 md:w-9 lg:w-10 h-7 md:h-9 lg:h-10 rounded-full bg-[#0077B5]/30 flex justify-center items-center rotate-90">
                                    <span><FaLinkedinIn /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;