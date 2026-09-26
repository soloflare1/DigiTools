
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-100 border-t border-slate-100 pt-16 pb-8 ">
      <div className="max-w-7xl mx-auto px-6">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="#products" className="hover:text-indigo-600 transition">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-indigo-600 transition">
                  UI Components
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-indigo-600 transition">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>
         
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="#about" className="hover:text-indigo-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-indigo-600 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="#faq" className="hover:text-indigo-600 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-10 pt-6">  
          <p className="text-xs text-slate-400 text-center">
            &copy; 2026 DigiTools Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
