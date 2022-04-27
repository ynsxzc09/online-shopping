import React from 'react';
import ProductList from './ProductList';
import Category from '../Category';

import '../Products/Product.css';
import styled from 'styled-components'
import Cart from '../Cart/Cart';

function Product(props) {
    return (
        <MainProd>
            <aside className='prod-container'>
                <Category />
                <ProductList/>
                <Cart/>
            </aside>
        </MainProd>
    );
}

const MainProd = styled.aside`
.prod-container{
    display: inline-flex;
    background-color: #FFF5EA;
}
`

export default Product;