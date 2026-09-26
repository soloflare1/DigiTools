
import React from 'react';
import { Rocket, PlayCircle, ArrowRight } from 'lucide-react';


const Hero = ({ setActiveTab }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-indigo-600"></span> New: AI-Powered Tools Available
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          Supercharge Your <br /><span className="text-indigo-600">Digital Workflow</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>
        <div className="flex gap-4 pt-2">
          <button onClick={() => setActiveTab('product')} className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-200 hover:bg-indigo-700">
            Explore Products <ArrowRight className="w-4 h-4" />
          </button>
          <button className="border border-indigo-200 text-indigo-600 px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-indigo-50">
            <PlayCircle className="w-4 h-4" /> Watch Demo
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50/30 p-8 rounded-3xl border border-indigo-100 flex items-center justify-center min-h-[320px]"> 
        <div className="text-center space-y-3"> 
          <div className="w-20 h-20 bg-white rounded-2xl shadow-xl mx-auto flex items-center justify-center text-indigo-600">
            <Rocket className="w-10 h-10" />
          </div>
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Digital Assets Suite</p> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
