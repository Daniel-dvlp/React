import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Cart from './components/Cart/Cart';
import Proteins from './pages/Proteins/Proteins';
import Suplementos from './pages/Suplementos/Suplementos';
import Creatinas from './pages/Creatinas/Creatinas';
import Membresias from './pages/Membresias/Membresias';
import { CartProvider } from './context/CartContext/CartContext';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <div className="featured-products">
                </div>
              </>
            } />
            <Route path="/proteinas" element={<Proteins />} />
            <Route path="/suplementos" element={<Suplementos />} />
            <Route path="/creatinas" element={<Creatinas />} />
            <Route path="/membresias" element={<Membresias />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
