import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>🎂 Cake Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
