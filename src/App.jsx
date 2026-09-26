
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <StatsBanner />
      <ProductCard />
      <CartView />
      <GetStarted />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;