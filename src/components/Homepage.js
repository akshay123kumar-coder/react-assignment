import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="welcome-section">
        <h2>Welcome to Cake Shop</h2>
        <p>Discover the finest cakes for every occasion. Indulge in our delicious selection of freshly baked cakes!</p>
      </div>

      <div className="featured-cakes">
        <div className="featured-cake-item">
          <img
            src="/images/featured cake1.jpg"
            alt="Featured Cake 1"
            className="cake-image"
          />
          <h3>Cream Fudge Cake</h3>
        </div>
        <div className="featured-cake-item">
          <img
            src="/images/featured cake2.jpg"
            alt="Featured Cake 2"
            className="cake-image"
          />
          <h3>Vanilla Cake</h3>
        </div>
      </div>

      <div className="cta-section">
        <button className="cta-button">Browse All Cakes</button>
      </div>
    </div>
  );
};

export default Homepage;
