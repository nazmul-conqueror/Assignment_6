import React from 'react';
import bannerImg from "../assets/banner.png"

const HeroSection = () => {
    return (
         <div className="relative min-h-screen flex items-center overflow-hidden px-4">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-4 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-600 text-xs sm:text-sm font-medium px-4 py-2 rounded-full">
            <img src="/group-5.png" alt="" className="w-4 h-4" />
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Supercharge Your <br className="hidden sm:block" />
            Digital Workflow
          </h1>

          <p className="text-base sm:text-lg text-zinc-700 max-w-lg mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-4">
            
            <button className="btn btn-primary rounded-full w-full sm:w-auto">
              Explore Products
            </button>

            <button className="btn btn-outline rounded-full w-full sm:w-auto flex items-center justify-center gap-2">
              <img src="/play.png" alt="" className="w-4 h-4" />
              Watch Demo
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src={bannerImg} 
            alt="" 
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>

      </div>
    </div>
    );
};

export default HeroSection;