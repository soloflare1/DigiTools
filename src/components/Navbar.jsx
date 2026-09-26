
import React from 'react';
import { ShoppingCart } from 'lucide-react';  

const Navbar = ({ cartCount, setActiveTab }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 px-6 py-3.5 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-xl font-bold text-slate-900 tracking-tight">DigiTools</div>  
      <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
        <a href="#products" className="hover:text-indigo-600">Products</a>
        <a href="#features" className="hover:text-indigo-600">Features</a>
        <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
        <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
        <a href="#faq" className="hover:text-indigo-600">FAQ</a>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => setActiveTab('cart')} className="relative p-2 text-slate-600 hover:text-indigo-600">
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (     
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button className="text-sm font-semibold text-slate-700 hover:text-indigo-600">Login</button>
        <button className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
