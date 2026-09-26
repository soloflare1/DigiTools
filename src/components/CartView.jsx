
import React from 'react';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

const CartView = ({ cart, onRemoveFromCart, onCheckout, totalPrice, onContinueShopping }) => {
  if (cart.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-16 px-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm"> 
       
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="w-8 h-8" />
        </div>
       
        <h3 className="text-xl font-bold text-slate-900 mb-2">Your Cart is Empty</h3>
        <p className="text-xs text-slate-500 mb-6">
          Looks like you haven't added any digital tools to your cart yet.
        </p>
      
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
     
      <div className="lg:col-span-2 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Cart Items ({cart.length})
        </h3>
        
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <ShoppingBag className="w-5 h-5" />
              </div>
             
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                <p className="text-xs text-slate-400">
                  ${item.price} / {item.period || 'monthly'}
                </p>
              </div>

            </div>  
            <button
              onClick={() => onRemoveFromCart(item.id)}
              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
              title="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}

      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm h-fit space-y-6">
        <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
          Order Summary
        </h3>
        <div className="space-y-3 text-xs text-slate-600">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span className="font-semibold text-slate-900">{cart.length}</span>
          </div>
          
          <div className="flex justify-between text-sm font-bold text-slate-900 pt-3 border-t border-slate-100">
            <span>Total Amount</span>
            <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={onCheckout}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};  

export default CartView;

