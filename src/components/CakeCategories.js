import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CakeCategories.css';

const categories = [
  { id: 1, name: 'Chocolate Cakes', description: 'Rich and creamy chocolate cakes.', image: '/images/chocolate cake.jpg', rating: 4.5 },
  { id: 2, name: 'Custom Cakes', description: 'Made-to-order for special occasions.', image: '/images/custom cake.jpg', rating: 4.0 },
  { id: 3, name: 'Fruit Cakes', description: 'Fresh and fruity flavors.', image: '/images/fruit cake.jpg', rating: 4.8 },
];

const CakeCategories = () => {
  const [showImage, setShowImage] = useState(null);

  const handleImageClick = (image) => {
    setShowImage(image);
  };

  const closeModal = () => {
    setShowImage(null);
  };

  return (
    <div className="cake-categories">
      <h2>Cake Categories</h2>
      <div className="categories">
        {categories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id} className="category">
            <div className="category-image">
              <img
                src={category.image}
                alt={category.name}
                onError={(e) => (e.target.src = '/images/placeholder.jpg')} // Fallback image
                onClick={() => handleImageClick(category.image)} // Open modal on image click
              />
              <div className="overlay">
                <p>{category.description}</p>
              </div>
            </div>
            <h3>{category.name}</h3>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={index < Math.floor(category.rating) ? 'filled' : 'empty'}>
                  &#9733;
                </span>
              ))}
              <span className="rating-text">{category.rating}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Modal for displaying larger image */}
      {showImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={showImage} alt="Larger view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CakeCategories;
