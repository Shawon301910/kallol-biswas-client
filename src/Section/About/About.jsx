import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import SplitType from "split-type";
import { GoProjectRoadmap } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { FaFlag } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);


const About = () => {

    const aboutBody = useRef(null);
    const aboutHeading = useRef(null);

    useGSAP(() => {
        const text = new SplitType("#about-text", { types: 'aboutChars' });

        const aboutTL = gsap.timeline({
            scrollTrigger: {
                trigger: aboutBody.current,
                start: "-20% center",
                end: "+=950",
                scrub: .5
            }
        })

        aboutTL.from(aboutHeading.current, {
            opacity: 0,
            y: 100,
            duration: 19
        })
        aboutTL.from(text.chars, {
            color: "#000",
            y: 100,
            opacity: 0,
            duration: 2,
            stagger: 0.1
        })
        aboutTL.from(".aboutQ", {
            opacity: 0,
            x: -100,
            duration: 10
        })
        aboutTL.from(".aboutA", {
            opacity: 0,
            x: 100,
            duration: 10
        })
        aboutTL.from(".about-stats .about-statsC", {
            opacity: 0,
            x: 100,
            duration: 10,
            stagger: 7
        })
    });

    return (
        <div ref={aboutBody} className="w-full">
            <div className="w-full text-white text-center py-10">
                <div className="py-5">
                    <h3 ref={aboutHeading} style={{ textShadow: "3px 3px 6px #38BDF8" }} className="text-5xl sm:text-6xl md:text-7xl font-semibold">About</h3>
                </div>
                <div className="w-[95%] sm:w-[85%] mx-auto text-xl sm:text-2xl md:text-3xl py-2 sm:py-10">
                    <p id="about-text" className="tracking-wide sm:tracking-wider leading-7 sm:leading-10 text-pictonBlue">Hi, I am Kallol Biswas. I am a professional Full-Stack Web Developer. I have more than 4 years of experience in Web Development Sector and work with different clients in the local and freelance marketplace. Im expert in HTML, CSS, JS, PHP, MySQL, PSD to WordPress, PSD to HTML, Wordpress Theme Customization, Theme Development and eCommerce website.</p>
                </div>
            </div>
            <div className="w-full sm:w-[90%] mx-auto px-3 sm:px-10 py-0 md:py-5">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 grid-rows-4 xl:grid-rows-2 gap-2 md:gap-5 text-xl sm:text-2xl md:text-3xl">
                    <div className="flex items-center gap-5">
                        <p style={{ textShadow: "1px 1px 2px #38BDF8" }} className="aboutQ text-white font-medium">Residence : </p>
                        <p className="aboutA text-pictonBlue font-semibold">Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p style={{ textShadow: "1px 1px 2px #38BDF8" }} className="aboutQ text-white font-medium">Address : </p>
                        <p className="aboutA text-pictonBlue font-semibold">Jessore, Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p style={{ textShadow: "1px 1px 2px #38BDF8" }} className="aboutQ text-white font-medium">Age : </p>
                        <p className="aboutA text-pictonBlue font-semibold">28</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p style={{ textShadow: "1px 1px 2px #38BDF8" }} className="aboutQ text-white font-medium">Freelance : </p>
                        <p className="aboutA text-pictonBlue font-semibold">Available</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 xl:w-[90%] ml-auto xl:mx-auto py-10 md:py-20 px-3 sm:px-10 xl:px-0">
                <div className="about-stats grid grid-cols-1 xl:grid-cols-4 grid-rows-4 xl:grid-rows-1 gap-2 sm:gap-5">
                    <div className="about-statsC flex flex-col justify-between items-center gap-4 sm:gap-5 bg-white/5 p-5">
                        <span className="text-3xl sm:text-4xl md:text-5xl text-pictonBlue"><GoProjectRoadmap /></span>
                        <p style={{ textShadow: "1px 1px 2px #38BDF8" }} className="text-xl sm:text-2xl md:text-3xl font-medium text-white">250 + Project</p>
                    </div>
                    <div className="about-statsC flex flex-col justify-between items-center gap-4 sm:gap-5 bg-white/5 p-5">
                        <span className="text-3xl sm:text-4xl md:text-5xl text-pictonBlue"><FaStar /></span>
                        <p style={{ textShadow: "1px 1px 2px #38BDF8" }} className="text-xl sm:text-2xl md:text-3xl font-medium text-white">5 star review 160+</p>
                    </div>
                    <div className="about-statsC flex flex-col justify-between items-center gap-4 sm:gap-5 bg-white/5 p-5">
                        <span className="text-3xl sm:text-4xl md:text-5xl text-pictonBlue"><GrUserManager /></span>
                        <p style={{ textShadow: "1px 1px 2px #38BDF8" }} className="text-xl sm:text-2xl md:text-3xl font-medium text-white">45 + Client</p>
                    </div>
                    <div className="about-statsC flex flex-col justify-between items-center gap-4 sm:gap-5 bg-white/5 p-5">
                        <span className="text-3xl sm:text-4xl md:text-5xl text-pictonBlue"><FaFlag /></span>
                        <p style={{ textShadow: "1px 1px 2px #38BDF8" }} className="text-xl sm:text-2xl md:text-3xl font-medium text-white">20 + Country</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;