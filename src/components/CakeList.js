import React, { useState } from 'react';
import './CakeList.css';

const cakes = [
  { id: 1, name: 'Chocolate Cake', price: 15, image: '/images/chocolate.jpg' },
  { id: 2, name: 'Vanilla Cake', price: 12, image: '/images/vanilla.jpg' },
  { id: 3, name: 'Red Velvet', price: 20, image: '/images/redvelvet.jpg' },
];

const CakeList = ({ addToCart }) => {
  const [selectedCake, setSelectedCake] = useState(null);

  return (
    <div className="cake-list">
      <h2>Our Cakes</h2>
      <div className="cakes">
        {cakes.map((cake) => (
          <div className="cake" key={cake.id}>
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>${cake.price}</p>
            <button onClick={() => setSelectedCake(cake)}>View Details</button>
            <button onClick={() => addToCart(cake)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {selectedCake && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedCake.name}</h3>
            <p>Price: ${selectedCake.price}</p>
            <img src={selectedCake.image} alt={selectedCake.name} />
            <button onClick={() => setSelectedCake(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CakeList;
