import {ADD_TO_CART,
SET_QUANTITY,
TOTAL_AMOUNT,
CLEAR_CART, REMOVE_ITEM, LOAD_DATA, UPDATE_FILTER, UPDATE_FILTERED_ITEMS, UPDATE_SEARCH, SORT_VALUE, SHOW_MODAL} from '../utils/action_type.js'

function reducer(state, {type, payload}) {
    switch (type) {
        case ADD_TO_CART:
        if (state.cart.find((item) => item.id === payload.id)) {
            return { ...state };
        } else {
            return {...state, cart: [...state.cart, payload] };
        }
        case SET_QUANTITY:
        const tempCart = state.cart.map((item) => {
            if(item.id === payload.id) {
                if (payload.name === "decrease") {
                    let newQty = item.qty -1;
                    if (newQty <= 1) {
                        newQty = 1;
                    }
                    return {...item, qty: newQty}
                }
                if (payload.name === "increase") {
                    let newQty = item.qty + 1;
                    return {...item, qty: newQty};
                }
            } else {
                return item;
            }
        }) 
        return { ...state, cart: tempCart };

    case TOTAL_AMOUNT:
        const finalTotal = state.cart.reduce((total, {unitPrice, qty}) => {
            const subTotal = unitPrice * qty;
            return {...total, amount: total.amount += subTotal, quantity: total.quantity += qty}
        }, {amount: 0, quantity: 0})
    return { ...state, totalAmount: finalTotal.amount, totalQuantity: finalTotal.quantity };

    case CLEAR_CART:
    return { ...state, cart: [] };

    case REMOVE_ITEM:
        const cartMod = state.cart.filter((item) => item.id !== payload.id)
        return {...state, cart: cartMod };
    
    case LOAD_DATA:
        return {...state, allItems: payload.slice()}

    case UPDATE_FILTER:
        const {name, value, } = payload;
        if (name === 'category') {
            return {...state, filter: {...state.filter, category: value.toLowerCase() }}
        } if (name === 'search'){
            return {...state, filter: {...state.filter, search : value.toLowerCase()} }
        } if (name === 'price') {
            return {...state, filter: {...state.filter, price: value}}
        }
        break;

    case UPDATE_FILTERED_ITEMS:
        const currentCategory = state.filter.category
        if(currentCategory === "all"){
            return {...state, filteredItem: state.allItems}
        } else { 
            return {...state, filteredItem: payload.filter((item) => item.category === currentCategory)}
        }
    case UPDATE_SEARCH: 
        const searchValue = state.filter.search
        const filterSearch = state.filteredItem.filter(({productName}) => {
        return productName.toLowerCase().startsWith(searchValue)
        })
        return {...state, filteredItem: filterSearch}
    case SORT_VALUE: 
    const  filterPrice = state.filter.price
    if (filterPrice === "highest") {
        const sortByPrice = state.filteredItem.sort((b, a) => {
        return a.unitPrice - b.unitPrice
        })
        return {...state, filteredItem: sortByPrice}
    }
    return {...state, filteredItem: state.filteredItem.sort((a, b) => {
        return a.unitPrice - b.unitPrice
        }) }

    case SHOW_MODAL:
    return {...state, showModal: payload}

    default:
break;
}
}

export default reducer;