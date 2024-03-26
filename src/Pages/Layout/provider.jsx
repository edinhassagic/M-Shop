import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const storedCartDataString = localStorage.getItem('cartData');
    const storedCartData = storedCartDataString ? JSON.parse(storedCartDataString) : [];
    if (storedCartData) {
      setCartData(storedCartData);
    }

    setCartCount(storedCartData.length === 0 ? 0 : storedCartData.reduce((total, item) => total + item.quantity, 0));


  }, []);


  const addItemToCart = (item) => {

    const existingItem = cartData.length > 0 ? cartData.find(cartItem => cartItem.name === item.name) : null;


    if (existingItem) {
      const updatedCartData = cartData.map(cartItem => {
        if (cartItem.name === item.name) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      localStorage.setItem('cartData', JSON.stringify(updatedCartData));

      setCartData(updatedCartData);
    } else {

      const newItem = { ...item, quantity: 1 };


      const updatedCartData = cartData.length > 0 ?   [...cartData, newItem] : [newItem];
      setCartData(updatedCartData);
      localStorage.setItem('cartData', JSON.stringify(updatedCartData));

    }
    console.log(cartData)

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    clearTimeout();

  }

  const incrementCartCount = (item) => {
    addItemToCart(item)

    setCartCount(cartCount + 1)


  };


  const emptyTrash = () => {
    setCartData(0);
    setCartCount(0);
    localStorage.setItem('cartData', [])
  }

  return (
    <CartContext.Provider value={{ cartData, addItemToCart, cartCount, incrementCartCount, emptyTrash, showAlert }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
