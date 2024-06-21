import React, { useContext } from 'react';
import { CartContext } from './../context/CartContext';
import './../CartScreen.css';

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  //function to get total price of cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default CartScreen;
