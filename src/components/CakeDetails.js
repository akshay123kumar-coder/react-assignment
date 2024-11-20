import React from 'react';
import { useParams } from 'react-router-dom';
import './CakeDetails.css';

const CakeDetails = () => {
  const { id } = useParams();

  return (
    <div className="cake-details">
      <h2>Cake Details for Cake ID: {id}</h2>
      <p>Ingredients, size options, and flavor details go here.</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default CakeDetails;
