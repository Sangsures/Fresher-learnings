
import React, { createContext, useState, useContext, useEffect } from 'react';


const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('bookCart') || '[]');
    setCart(savedCart);
  }, []);

  
  const addToCart = (book) => {
    
    const updatedCart = [...cart];
    
    
    const existingBookIndex = updatedCart.findIndex(item => item._id === book._id);
    
    if (existingBookIndex > -1) {
     
      updatedCart[existingBookIndex] = {
        ...updatedCart[existingBookIndex],
        quantity: (updatedCart[existingBookIndex].quantity || 1) + 1
      };
    } else {
      
      updatedCart.push({ ...book, quantity: 1 });
    }

    
    setCart(updatedCart);
    localStorage.setItem('bookCart', JSON.stringify(updatedCart));

    
    alert(`${book.title} added to cart!`);
  };

  
  const removeFromCart = (bookId) => {
    const updatedCart = cart.filter(item => item._id !== bookId);
    setCart(updatedCart);
    localStorage.setItem('bookCart', JSON.stringify(updatedCart));
  };

 
  const cartItemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

const cartTotal = cart.reduce((total, item) => 
    total + ((item.salePrice || item.originalPrice) * (item.quantity || 1)), 0);

  
  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      cartItemCount,
      cartTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};