import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chocolate Cake', price: 20, quantity: 1 },
    { id: 2, name: 'Fruit Cake', price: 25, quantity: 2 },
    { id: 3, name: 'Custom Cake', price: 30, quantity: 1 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ${getTotal()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty. Add some delicious cakes!</p>
      )}
    </div>
  );
};

export default Cart;
