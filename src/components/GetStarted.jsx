
import React from 'react';
import { UserPlus, Download, Sparkles } from 'lucide-react';  

const GetStarted = () => {  
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-slate-900">Get Started in 3 Steps</h2>
      <p className="text-xs text-slate-400 mt-1 mb-10">Start using premium digital tools in minutes, not hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
          <span className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">01</span>
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-slate-800">Create Account</h4>
          <p className="text-[11px] text-slate-400 mt-1">Sign up for free in seconds. No credit card required.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
          <span className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">02</span>
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-slate-800">Choose Products</h4>

          <p className="text-[11px] text-slate-400 mt-1">Browse catalog and select tools that fit your needs.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
          <span className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">03</span>
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-slate-800">Start Creating</h4>
          <p className="text-[11px] text-slate-400 mt-1">Download and start using premium tools immediately.</p>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;