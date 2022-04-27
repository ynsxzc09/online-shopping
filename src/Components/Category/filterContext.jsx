import React, { createContext, useContext, useEffect, useReducer }  from 'react';
import data from '../../Assets/items.json';
import reducer from '../Cart/reducer'
import {LOAD_DATA, UPDATE_FILTER, UPDATE_FILTERED_ITEMS} from '../utils/action_type'

const CategoryContext = createContext();

const secondState = {
    allItems: [],
    filteredItem: [],
    filter: {category: "All", price:"lowest" }
}

function FilterProvider({children}) {
    const [state, dispatch] = useReducer(reducer, secondState);

    useEffect(() => {
        dispatch({type: LOAD_DATA, payload: data})
    }, [])

    useEffect(() => {
        dispatch({type: UPDATE_FILTERED_ITEMS, payload: data.slice()})
    }, [state.filter])

    const updateFilter = (name) => {
        dispatch({type: UPDATE_FILTER, payload: name})
    }
    
    return <CategoryContext.Provider value={{...state, updateFilter}}>
        {children}
    </CategoryContext.Provider>
}

const useCategoryContext = () => {
    return useContext(CategoryContext);}

export {useCategoryContext, FilterProvider};