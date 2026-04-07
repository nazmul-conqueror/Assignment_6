import React from 'react';

const RatingSection = () => {
    return (
       <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 md:py-12 rounded-md mb-10 md:mb-20 px-4">
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/30">
        
        <div className="py-4 sm:py-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">50K+</h2>
          <p className="text-xs sm:text-sm opacity-80">Active Users</p>
        </div>

        <div className="py-4 sm:py-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">200+</h2>
          <p className="text-xs sm:text-sm opacity-80">Premium Tools</p>
        </div>

        <div className="py-4 sm:py-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">4.9</h2>
          <p className="text-xs sm:text-sm opacity-80">Rating</p>
        </div>

      </div>

    </div>
    );
};

export default RatingSection;