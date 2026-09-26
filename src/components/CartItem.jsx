import React from 'react';
import { Trash2 } from 'lucide-react';
import DynamicIcon from './DynamicIcon';  

const CartItem = ({ item, onRemove }) => {  
  return (
    <div className="flex items-center justify-between bg-base-100 p-4 rounded-xl shadow-sm border border-base-200">
      <div className="flex items-center gap-4">
        <div className="p-2.5 bg-base-200 text-primary rounded-lg">
          <DynamicIcon name={item.icon} className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-base">{item.name}</h4>
          <span className="text-xs text-base-content/60">${item.price} / {item.period}</span>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="btn btn-sm btn-circle btn-ghost text-error"
        title="Remove Item"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CartItem;
