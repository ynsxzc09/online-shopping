import React, { createContext, useContext, useEffect, useReducer }  from 'react';
import data from '../../Assets/items.json';
import reducer from '../Cart/reducer'
import {LOAD_DATA, UPDATE_FILTER, UPDATE_FILTERED_ITEMS, UPDATE_SEARCH, SORT_VALUE} from '../utils/action_type'

const CategoryContext = createContext();

const secondState = {
    allItems: [],
    filteredItem: [],
    filter: {category: "all", price:"lowest", search: "" }
}

function FilterProvider({children}) {
    const [state, dispatch] = useReducer(reducer, secondState);

    useEffect(() => {
        dispatch({type: LOAD_DATA, payload: data})
    }, [])

    useEffect(() => {
        dispatch({type: UPDATE_FILTERED_ITEMS, payload: data.slice()})
        dispatch({type: UPDATE_SEARCH})
        dispatch({type: SORT_VALUE})
    }, [state.filter])

    const updateFilter = (name, value) => {
        dispatch({type: UPDATE_FILTER, payload: {name, value}})
    }
    
    return <CategoryContext.Provider value={{...state, updateFilter}}>
        {children}
    </CategoryContext.Provider>
}

const useCategoryContext = () => {
    return useContext(CategoryContext);}

export {useCategoryContext, FilterProvider};