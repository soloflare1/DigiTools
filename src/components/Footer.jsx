import React from 'react';
import { Globe, Share2, MessageSquare, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          <div className="md:col-span-2 space-y-4">
            <div className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block"></span>
              DigiTools
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Empowering creators and developers worldwide with premium AI-driven digital assets and tools. Built to supercharge your productivity.
            </p>
           
            <div className="flex gap-2.5 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-100 transition">
                <Globe className="w-4 h-4" /> 
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-100 transition">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-100 transition">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-100 transition">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs text-slate-500"> 
                <li><a href="#products" className="hover:text-indigo-600 transition">AI Tools</a></li>
                <li><a href="#products" className="hover:text-indigo-600 transition">UI Components</a></li>
                <li><a href="#pricing" className="hover:text-indigo-600 transition">Pricing Plans</a></li>
            </ul>
          </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12">  
           <div className="space-y-3">
             <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Company</h4   
          >
          <ul className="space-y-2 text-xs text-slate-500">
            <li><a href="#about" className="hover:text-indigo-600 transition">About Us</a></li>
            <li><a href="#privacy" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Support</h4>
          <ul className="space-y-2 text-xs text-slate-500">
            <li><a href="#faq" className="hover:text-indigo-600 transition">FAQ</a></li>
            <li><a href="#contact" className="hover:text-indigo-600 transition">Contact Us</a></li>
          </ul>
        </div>
       <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400  ">
          <p>&copy; 2026 DigiTools Inc. All rights reserved.</p> 
        </div>

        </div>
    </footer>

  );
}

export default Footer;