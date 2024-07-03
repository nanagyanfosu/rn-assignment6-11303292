import React, {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0); // Step 1


    const addToCart = (item) => {
        setCartItems(currentItems => [...currentItems, item]);
        setCartItemCount(currentCount => currentCount + 1); // Step 2

    };

    const removeFromCart = (itemId) => {
        const itemToRemove = cartItems.find(item => item.id === itemId);
        if (itemToRemove) {
            setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
            setCartItemCount(currentCount => currentCount - 1); // Adjust count when removing
        }
    };

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, cartItemCount }}>
            {children}
        </CartContext.Provider>
    )
}