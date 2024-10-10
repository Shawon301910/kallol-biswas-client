import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Circle, Line } from "rc-progress";
import { useRef } from "react";
import { FaFlag } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import SplitType from "split-type";


gsap.registerPlugin(ScrollTrigger);


const MySkill = () => {

    const mySkillRef = useRef(null);

    useGSAP(() => {

        const text = new SplitType(".skill-know", { types: 'skillChars' });

        const mySkillTL = gsap.timeline({
            scrollTrigger: {
                trigger: mySkillRef.current,
                pin: true,
                start: "-40% top",
                end: "+=6000",
                scrub: 1
            }
        });

        mySkillTL.to(mySkillRef.current, {
            x: () => -(mySkillRef.current.scrollWidth - window.innerWidth),
            duration: 30,
            ease: "none"
        });

        mySkillTL.from(text.chars, {
            x: 5,
            opacity: 0.05,
            duration: 2,
            stagger: 0.5
        })
    });

    return (
        <div ref={mySkillRef} className="skill flex gap-20 sm:gap-32 md:gap-40 lg:gap-52">
            <div className="flex-shrink-0 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto text-center">
                <div className="py-28">
                    <h3 style={{ textShadow: "3px 3px 6px #38BDF8" }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-white">My Skill</h3>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-[90%] lg:w-2/3 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto bg-white/5 rounded-lg">
                <div className="flex items-center h-full px-10 sm:px-16 md:px-24 lg:px-32 py-5 sm:py-12 md:py-16 lg:py-20 backdrop-blur-3xl rounded-lg">
                    <div className="w-4/5 h-full flex flex-col justify-between mx-auto">
                        <div className="py-1 md:py-2">
                            <div className="py-1 md:py-2">
                                <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">Web Design</h4>
                            </div>
                            <Line percent={92} strokeColor={"#38BDF8"} trailColor="#38BDF80D" />
                        </div>
                        <div className="py-1 md:py-2">
                            <div className="py-1 md:py-2">
                                <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">Web Development</h4>
                            </div>
                            <Line percent={80} strokeColor={"#38BDF8"} trailColor="#38BDF80D" />
                        </div>
                        <div className="py-1 md:py-2">
                            <div className="py-1 md:py-2">
                                <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">WordPress</h4>
                            </div>
                            <Line percent={95} strokeColor={"#38BDF8"} trailColor="#38BDF80D" />
                        </div>
                        <div className="pb-2">
                            <div className="py-1 md:py-2">
                                <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">Website Speed Up</h4>
                            </div>
                            <Line percent={85} strokeColor={"#38BDF8"} trailColor="#38BDF80D" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-[90%] lg:w-2/3 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto bg-white/5 rounded-lg">
                <div className="w-full h-full px-5 sm:px-16 md:px-24 lg:px-32 py-12 md:py-16 lg:py-20 backdrop-blur-3xl rounded-lg">
                    <div className="w-4/5 h-full mx-auto">
                        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-10 lg:gap-16">
                            <div className="w-full h-full">
                                <div className="w-full h-full relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">90%</h4>
                                    </div>
                                    <Circle style={{ width: "100%", height: "100%" }} percent={90} strokeWidth={4} strokeColor={"#38BDF8"} trailWidth={4} trailColor="#38BDF80D" />
                                </div>
                                <div className="text-center py-1 md:py-2">
                                    <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">WordPress</h4>
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <div className="w-full h-full relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">85%</h4>
                                    </div>
                                    <Circle style={{ width: "100%", height: "100%" }} percent={85} strokeWidth={4} strokeColor={"#38BDF8"} trailWidth={4} trailColor="#38BDF80D" />
                                </div>
                                <div className="text-center py-1 md:py-2">
                                    <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">PHP / MySQL</h4>
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <div className="w-full h-full relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <h4 className="text-white text-xl sm:text-2xl md:text-2xl font-semibold">80%</h4>
                                    </div>
                                    <Circle style={{ width: "100%", height: "100%" }} percent={80} strokeWidth={4} strokeColor={"#38BDF8"} trailWidth={4} trailColor="#38BDF80D" />
                                </div>
                                <div className="text-center py-1 md:py-2 pb-2">
                                    <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">JavaScript</h4>
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <div className="w-full h-full relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">95%</h4>
                                    </div>
                                    <Circle style={{ width: "100%", height: "100%" }} percent={95} strokeWidth={4} strokeColor={"#38BDF8"} trailWidth={4} trailColor="#38BDF80D" />
                                </div>
                                <div className="text-center py-1 md:py-2 pb-2">
                                    <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">HTML / CSS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-[90%] lg:w-2/3 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto bg-white/5 rounded-lg">
                <div className="flex items-center h-full px-10 sm:px-16 md:px-24 lg:px-32 py-5 sm:py-12 md:py-16 lg:py-20 backdrop-blur-3xl rounded-lg">
                    <div className="w-4/5 h-full flex flex-col justify-between mx-auto">
                        <div className="py-2">
                            <div className="py-2 flex items-center justify-end gap-3">
                                <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">Language</h4>
                                <span className="text-2xl sm:text-3xl md:text-4xl text-pictonBlue"><FaFlag /></span>
                            </div>
                        </div>
                        <div className="py-1 md:py-2">
                            <div className="py-1 md:py-2">
                                <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">Bangla . . .</h4>
                            </div>
                            <Line percent={98} strokeColor={"#38BDF8"} trailColor="#38BDF80D" />
                        </div>
                        <div className="py-1 md:py-2">
                            <div className="py-1 md:py-2">
                                <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">English . . .</h4>
                            </div>
                            <Line percent={90} strokeColor={"#38BDF8"} trailColor="#38BDF80D" />
                        </div>
                        <div className="py-1 md:py-2">
                            <div className="py-1 md:py-2">
                                <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">Hindi . . .</h4>
                            </div>
                            <Line percent={85} strokeColor={"#38BDF8"} trailColor="#38BDF80D" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 w-full">
                <div className="px-10">
                    <ul className="text-xl sm:text-2xl md:text-3xl text-white font-medium flex flex-col gap-5">
                        <li className="flex items-center gap-3 md:gap-5">
                            <span className="text-pictonBlue"><GiCheckMark /></span>
                            <span>
                                <h5 className="skill-know">Web Server Management</h5>
                            </span>
                        </li>
                        <li className="flex items-center gap-3 md:gap-5">
                            <span className="text-pictonBlue"><GiCheckMark /></span>
                            <span>
                                <h5 className="skill-know">Speed Optimize</h5>
                            </span>
                        </li>
                        <li className="flex items-center gap-3 md:gap-5">
                            <span className="text-pictonBlue"><GiCheckMark /></span>
                            <span>
                                <h5 className="skill-know">Responsive design</h5>
                            </span>
                        </li>
                        <li className="flex items-center gap-3 md:gap-5">
                            <span className="text-pictonBlue"><GiCheckMark /></span>
                            <span>
                                <h5 className="skill-know">Time Management</h5>
                            </span>
                        </li>
                        <li className="flex items-center gap-3 md:gap-5">
                            <span className="text-pictonBlue"><GiCheckMark /></span>
                            <span>
                                <h5 className="skill-know">Communication</h5>
                            </span>
                        </li>
                        <li className="flex items-center gap-3 md:gap-5">
                            <span className="text-pictonBlue"><GiCheckMark /></span>
                            <span>
                                <h5 className="skill-know">Typography</h5>
                            </span>
                        </li>
                        <li className="flex items-center gap-3 md:gap-5">
                            <span className="text-pictonBlue"><GiCheckMark /></span>
                            <span>
                                <h5 className="skill-know">Color Theory</h5>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MySkill;