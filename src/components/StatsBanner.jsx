
import React from 'react';

const StatsBanner = () => {
  return (
    <section className="bg-indigo-600 text-white py-10 my-8">
      <div className="max-w-4xl mx-auto grid grid-cols-3 text-center divide-x divide-indigo-500/50">
       
        <div>
          <h3 className="text-3xl font-extrabold">50K+</h3>
          <p className="text-xs text-indigo-200 mt-1">Active Users</p>
        </div>
       
        <div>
          <h3 className="text-3xl font-extrabold">200+</h3>
          <p className="text-xs text-indigo-200 mt-1">Premium Tools</p>
        </div>
       
        <div>
          <h3 className="text-3xl font-extrabold">4.9</h3>
          <p className="text-xs text-indigo-200 mt-1">Rating</p>
        </div>
      
      </div>
    </section>
  );
};

export default StatsBanner;
