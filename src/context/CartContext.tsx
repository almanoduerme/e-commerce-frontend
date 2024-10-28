import React, { createContext, useState } from "react";
import { Product, CartContextType, CartItem } from "../interfaces";

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: Product, quantity: number) => {
    setCart((prevCart) => {
      const cartMap = new Map(prevCart.map(cartItem => [cartItem.id, cartItem]));
  
      if (cartMap.has(item.id)) {
        const existingItem = cartMap.get(item.id)!;

        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...existingItem, quantity: existingItem.quantity + quantity }
            : cartItem
        );
      }
  
      return [...prevCart, { ...item, quantity: quantity }];
    });
  };

  const removeItem = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== itemId);
      }
      return prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
    });
  };

  const getTotalQuantity = (): number | undefined => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider }