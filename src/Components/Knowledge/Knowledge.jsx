import Marquee from "react-fast-marquee";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";


const Knowledge = () => {

    return (
        <div className="w-full px-10 md:pt-10 pb-5 md:pb-20">
            <Marquee speed={150} gradient={true} gradientColor="#0B1121">
                <div className="flex items-center justify-between gap-2 md:gap-5 xl:gap-20">
                    <div className="flex flex-col justify-center items-center gap-5 text-[#3299C5] px-2 sm:px-10 md:px-20 py-1 sm:py-5">
                        <span className="text-5xl sm:text-7xl md:text-9xl"><FaWordpress /></span>
                        <h4 className="text-xl sm:text-2xl font-bold">Wordpress</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 text-[#8319FB] px-2 sm:px-10 md:px-20 py-1 sm:py-5">
                        <span className="text-5xl sm:text-7xl md:text-9xl"><FaBootstrap /></span>
                        <h4 className="text-xl sm:text-2xl font-bold">Bootstrap</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 text-[#E5532D] px-2 sm:px-10 md:px-20 py-1 sm:py-5">
                        <span className="text-5xl sm:text-7xl md:text-9xl"><FaHtml5 /></span>
                        <h4 className="text-xl sm:text-2xl font-bold">HTML</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 text-[#2D53E5] px-2 sm:px-10 md:px-20 py-1 sm:py-5">
                        <span className="text-5xl sm:text-7xl md:text-9xl"><FaCss3Alt /></span>
                        <h4 className="text-xl sm:text-2xl font-bold">CSS</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 text-[#F7E025] px-2 sm:px-10 md:px-20 py-1 sm:py-5">
                        <span className="text-5xl sm:text-7xl md:text-9xl"><FaJs /></span>
                        <h4 className="text-xl sm:text-2xl font-bold">JavaScript</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 text-[#7B7FB5] px-2 sm:px-10 md:px-20 py-1 sm:py-5">
                        <span className="text-5xl sm:text-7xl md:text-9xl"><FaPhp /></span>
                        <h4 className="text-xl sm:text-2xl font-bold">PHP</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 text-[#58829B] pl-2 sm:pl-10 md:pl-20 py-1 sm:py-5 pr-3 sm:pr-20 md:pr-40">
                        <span className="text-5xl sm:text-7xl md:text-9xl"><GrMysql /></span>
                        <h4 className="text-xl sm:text-2xl font-bold">My<span className="text-[#F0931B]">SQL</span></h4>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Knowledge;