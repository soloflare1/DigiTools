import React from 'react';
import { Palette, Bot, SquarePen, Layout, Code2, FileText, Check, HelpCircle } from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Bot: Bot,
  SquarePen: SquarePen,
  Layout: Layout,
  Code2: Code2,
  FileText: FileText,
};


const ProductCard = ({ item, onAddToCart, isInCart }) => {
  const IconComponent = iconMap[item.icon] || HelpCircle;
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <IconComponent className="w-6 h-6" />
          </div>
          {item.tag && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">  
              {item.tag}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h3>  
        <p className="text-xs text-slate-500 mb-4 line-clamp-2">{item.description}</p>

        <div className="mb-6">
          <span className="text-2xl font-black text-slate-900">${item.price}</span>
          <span className="text-xs text-slate-400">/{item.period || 'month'}</span>
        </div>

        <ul className="space-y-2 mb-6">
          {item.features?.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
              <Check className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}

          </ul>

        </div>

        <button 
          onClick={() => onAddToCart(item)} 
          disabled={isInCart}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
            isInCart
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
          }`}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>

      </div>

  );
};

export default ProductCard;

