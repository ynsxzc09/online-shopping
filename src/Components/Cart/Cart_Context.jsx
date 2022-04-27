import React, {useEffect, useState, useContext, createContext, useReducer} from 'react';
import { ADD_TO_CART, SET_QUANTITY, TOTAL_AMOUNT,
CLEAR_CART, REMOVE_ITEM } from '../utils/action_type';
import reducer from './reducer'

const getLocaleStorage = () => {
let cartData = JSON.parse(localStorage.getItem("cart"));
if (cartData) {
    return cartData;
} else {
    return [];
}
};

const CartContext = createContext();
const initialState ={
    cart: getLocaleStorage(),
    totalAmount: 0,
    totalQuantity:0
}

const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);

function addItem({ id, productName, imageUrl, description, unitPrice }) {
    dispatch({type: ADD_TO_CART,
    payload: { id, productName, imageUrl, description, unitPrice, qty: 1 },
    });
}

    function setQty(name, id) {
        dispatch({type: SET_QUANTITY, payload: {name, id} })
    }
function removeItem(id) {
    dispatch({type: REMOVE_ITEM, payload: { id }})
}

    function clearCart() {
    dispatch({ type: CLEAR_CART });
}

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: TOTAL_AMOUNT });
}, [state.cart]);

return <CartContext.Provider value={{...state, addItem, setQty, clearCart, removeItem}}>
{children}
</CartContext.Provider>
};


const useCartContext =() => {
    return useContext(CartContext);
}

export {useCartContext, CartProvider};