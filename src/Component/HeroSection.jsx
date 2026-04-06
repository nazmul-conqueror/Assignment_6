import React from 'react';
import bannerImg from "../assets/banner.png"

const HeroSection = () => {
    return (
        <div className="relative min-h-162 flex items-center overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-600 text-sm font-medium px-5 py-2 rounded-full">
                        <span><img src="/group-5.png" alt="" /></span>New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter ">
                        Supercharge Your
                        <br />
                        Digital Workflow

                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products

                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="btn btn-primary rounded-full">
                           Explore Products
                        </button>
                         <button className='btn btn-outline rounded-full'><span><img src="/play.png" alt="" /></span>Watch Demo</button>
                    </div>

                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                 <img src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default HeroSection;