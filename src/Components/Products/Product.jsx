import React from 'react';
import ProductList from './ProductList';
import Category from '../Category/Category';
import styled from 'styled-components'
import Cart from '../Cart/Cart';
import Modal from '../Modal'
import {useCartContext} from '../Cart/Cart_Context'

function Product(props) {
    const {showModal} = useCartContext();
    return (
        <MainProd>
           {showModal && <Modal/>}
            <aside className='prod-container'>
                <Category />
                <ProductList/>
                <Cart/>
            </aside>
        </MainProd>
    );
}

const MainProd = styled.aside`
position: relative;
.prod-container{
    border-left: 2px;
    display: inline-flex;
}
`

export default Product;