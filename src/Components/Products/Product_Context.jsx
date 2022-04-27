import React, { createContext, useContext, useReducer } from 'react';
import data from '../../Assets/items.json';
// import reducer from '../Cart/reducer'

const ProductContext = createContext();
const items = data.slice()


function ProductsProvider({children}) {

    return (
        <ProductContext.Provider value={{items}}>
        {children}
        </ProductContext.Provider>
    );
} 

const useProductContext = () => {
return useContext(ProductContext); }

export {useProductContext, ProductsProvider }