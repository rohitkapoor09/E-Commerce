import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

//function to handle add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  //function to handle remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  //function to check wether item is in cart
  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
