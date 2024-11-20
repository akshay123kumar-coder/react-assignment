import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CakeCategories from './components/CakeCategories';
import CakeDetails from './components/CakeDetails';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/categories" element={<CakeCategories />} />
            <Route path="/cake/:id" element={<CakeDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
