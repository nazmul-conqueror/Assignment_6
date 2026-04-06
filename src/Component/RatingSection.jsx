import React from 'react';

const RatingSection = () => {
    return (
     <div class="bg-linear-to-r from-indigo-600 to-purple-600  text-white py-8 rounded-md mb-30">
  
  <div class="max-w-5xl mx-auto grid grid-cols-3 text-center divide-x divide-white/30">
    
    <div>
      <h2 class="text-4xl font-bold">50K+</h2>
      <p class="text-sm opacity-80">Active Users</p>
    </div>

    <div>
      <h2 class="text-4xl font-bold">200+</h2>
      <p class="text-sm opacity-80">Premium Tools</p>
    </div>

    <div>
      <h2 class="text-4xl font-bold">4.9</h2>
      <p class="text-sm opacity-80">Rating</p>
    </div>

  </div>

</div>
    );
};

export default RatingSection;