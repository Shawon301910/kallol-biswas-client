/* eslint-disable react/no-unescaped-entities */

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    const servicesRef = useRef(null);
    const servicesRotateRef = useRef(null);

    useGSAP(() => {
        const servicesTL = gsap.timeline({
            scrollTrigger: {
                trigger: servicesRef.current,
                pin: true,
                start: "-20% top",
                end: "+=3000",
                scrub: .5
            }
        })
        servicesTL.to(servicesRotateRef.current, {
            rotate: -315,
            duration: 100,
            ease: "none"
        })
    });

    return (
        <div ref={servicesRef} className="w-full h-screen relative top-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400vw] md:w-[350vw] xl:w-[250vw] h-[400vw] md:h-[350vw] xl:h-[250vw] rounded-full pt-10 -rotate-4">
                <div ref={servicesRotateRef} className="relative w-full h-full text-white rotate-0">
                    <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[90deg]">
                        <div className="w-full h-full flex justify-between items-center">
                            <div className="-rotate-90">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:w-[1000px]">
                                        <div className="text-center">
                                            <div className="py-5 md:py-10">
                                                <h3 style={{ textShadow: "3px 3px 6px #38BDF8" }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">My Services</h3>
                                            </div>
                                            <div className="">
                                                <p style={{ textShadow: "1px 1px 2px #000" }} className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium text-pictonBlue">I offer expert full stack and WordPress development services, creating dynamic, responsive websites tailored to your needs. From custom web applications and WordPress solutions to UI/UX design and web templates, I ensure your site is both functional and visually appealing. Let's collaborate to bring your digital vision to life!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rotate-90">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px]  md:w-[600px]">
                                        <div className="text-center px-2 sm:px-5 md:px-10 py-2 sm:py-5 md:py-10 bg-pictonBlue/30 rounded-2xl">
                                            <div className="py-3 md:py-5">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Woo Commerce Website</h3>
                                            </div>
                                            <div className="py-1 sm:py-3 md:py-5 px-3 sm:px-5 md:px-10 bg-white/50 rounded-2xl">
                                                <p className="text-sm sm:text-base md:text-lg font-semibold text-ebony">I am expert on createing wooCommerce site . If you wanted to create with wordpress and even if you want without wordpress I can do .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[135deg]">
                        <div className="w-full h-full flex justify-between items-center">
                            <div className="-rotate-90">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px]  md:w-[600px]">
                                        <div className="text-center px-2 sm:px-5 md:px-10 py-2 sm:py-5 md:py-10 bg-pictonBlue/30 rounded-2xl">
                                            <div className="py-3 md:py-5">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Web Design</h3>
                                            </div>
                                            <div className="py-1 sm:py-3 md:py-5 px-3 sm:px-5 md:px-10 bg-white/50 rounded-2xl">
                                                <p className="text-sm sm:text-base md:text-lg font-semibold text-ebony">I will create or convert any psd template to html . It will be pixel perfect design. And fully responsive website.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rotate-90">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px]  md:w-[600px]">
                                        <div className="text-center px-2 sm:px-5 md:px-10 py-2 sm:py-5 md:py-10 bg-pictonBlue/30 rounded-2xl">
                                            <div className="py-3 md:py-5">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Fixing Errors</h3>
                                            </div>
                                            <div className="py-1 sm:py-3 md:py-5 px-3 sm:px-5 md:px-10 bg-white/50 rounded-2xl">
                                                <p className="text-sm sm:text-base md:text-lg font-semibold text-ebony">I will fix your any wordpress problems, related to themes, plugins, css, javascript etc. I can handle almost all issues and errors regarding with wordpress.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[180deg]">
                        <div className="w-full h-full flex justify-between items-center">
                            <div className="-rotate-90">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px]  md:w-[600px]">
                                        <div className="text-center px-2 sm:px-5 md:px-10 py-2 sm:py-5 md:py-10 bg-pictonBlue/30 rounded-2xl">
                                            <div className="py-3 md:py-5">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Web Development</h3>
                                            </div>
                                            <div className="py-1 sm:py-3 md:py-5 px-3 sm:px-5 md:px-10 bg-white/50 rounded-2xl">
                                                <p className="text-sm sm:text-base md:text-lg font-semibold text-ebony">Create your website without any CMS. I will develop website fully custom row code. I will use html, css, js, php, mysql and many more.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rotate-90">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px]  md:w-[600px]">
                                        <div className="text-center px-2 sm:px-5 md:px-10 py-2 sm:py-5 md:py-10 bg-pictonBlue/30 rounded-2xl">
                                            <div className="py-3 md:py-5">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Landing Page</h3>
                                            </div>
                                            <div className="py-1 sm:py-3 md:py-5 px-3 sm:px-5 md:px-10 bg-white/50 rounded-2xl">
                                                <p className="text-sm sm:text-base md:text-lg font-semibold text-ebony">Looking for someone for a landing page. I will create you a eye-catching landing page with a professional touch. With any kind of requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[225deg]">
                        <div className="w-full h-full flex justify-between items-center">
                            <div className="-rotate-90">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px]  md:w-[600px]">
                                        <div className="text-center px-2 sm:px-5 md:px-10 py-2 sm:py-5 md:py-10 bg-pictonBlue/30 rounded-2xl">
                                            <div className="py-3 md:py-5">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">WordPress</h3>
                                            </div>
                                            <div className="py-1 sm:py-3 md:py-5 px-3 sm:px-5 md:px-10 bg-white/50 rounded-2xl">
                                                <p className="text-sm sm:text-base md:text-lg font-semibold text-ebony">I will create any kind of website with wordpress. Just send me about your project or website I will create as same as your requirements. I am expert with any kind of page builders and theme.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rotate-90">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:w-[1000px]">
                                        <div className="text-center px-2 sm:px-5 md:px-10 py-2 sm:py-5 md:py-10">
                                            <div className="">
                                                <h3 style={{ textShadow: "3px 3px 6px #38BDF8" }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light">let's </h3>
                                                <h3 style={{ textShadow: "3px 3px 6px #38BDF8" }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light">Work</h3>
                                                <h3 style={{ textShadow: "3px 3px 6px #38BDF8" }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light">Together</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;