
import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import ProductCard from './components/ProductCard';
import CartView from './components/CartView';
import GetStarted from './components/GetStarted';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = React.useState([]);  
  const [cart, setCart] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState('product');  

  useEffect(() => {
    axios.get('/products.json')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.info('Item removed from cart');
  };
  
  const handleCheckout = () => {
    setCart([]);
    toast.success('Proceeded to checkout!');
  };
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800">  
    <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartCount={cart.length} setActiveTab={setActiveTab} />
      <Hero setActiveTab={setActiveTab} />
      <StatsBanner />
      
      <section id="products" className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Premium Digital Tools</h2>
          <p className="text-slate-500 text-sm">Choose from our curated collection of premium digital products designed to boost your productivity.</p>

          <div className="inline-flex bg-slate-200/60 p-1 rounded-full mt-4"> 
                <button
                 onClick={() => setActiveTab('product')}  
                  className={`px-6 py-2 text-xs font-semibold rounded-full transition-all ${activeTab === 'product' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600'}`}
                >
                  Products
                </button>
                <button
                 onClick={() => setActiveTab('cart')}
                  className={`px-6 py-2 text-xs font-semibold rounded-full transition-all ${activeTab === 'cart' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600'}`}
                >
                  Cart ({cart.length})
                </button>
          </div>
        </div>

        {activeTab === 'product' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
                isInCart={cart.some((c) => c.id === item.id)}
              />
            ))}
          </div>
        ) : (
          <CartView
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
            onCheckout={handleCheckout}
            totalPrice={totalPrice}
            onContinueShopping={() => setActiveTab('product')}
          />
        )}
      </section>

      <GetStarted />
      <Pricing />

      <Footer />

     </div>
  );
}

export default App;