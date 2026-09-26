import React from 'react';
import { Rocket } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-base-200 py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold
                  text-base-content flex items-center justify-center gap-3">
                Supercharge Workflow
                 <Rocket className="w-8 h-8 text-primary" />
            </h1>
            <p className="text-base-content/70 text-sm md:text-base">
                Access world-class digital tools, software subscriptions,
                and developer assets at the best prices.
            </p>   
      </div> 
    </div>
  );
}

export default Banner;