import React from 'react';
import '../Products/ProductList.css'
import {useProductContext} from '../Products/Product_Context'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { formatPrice } from '../utils/helper';
import {useCartContext} from '../Cart/Cart_Context'


function ProductList(props) {
    const {items} = useProductContext();
    const {addItem} = useCartContext();
    return <ProductCard>
    <div className='container-card'>
    {items.map(({imageUrl, id, description, productName, unitPrice}) => {
        return (
            <div className='item-card' key={id}>
            <Link to={`/products/${id}`}>
            <div className='img-container'>
            <img src={imageUrl} alt={productName} className='img-product'/>
            </div>
            <h4 className='title-product'>{productName}</h4>
            <p className='price'>{formatPrice(unitPrice)}</p>
            <p className='desc-product'>{description.slice(0, 150)}</p>
            <br/>
            </Link>
            <button onClick={() => { addItem({imageUrl, id, description, productName, unitPrice}) }} className='btn-product'>Add to Cart</button>
            </div>
        );
    })};
    </div>
    </ProductCard>
    
}



const ProductCard = styled.div`
.container-card {
width: 60vw;
margin: 10px;
/* background-color: #FFF5EA; */
padding: 30px;
display: grid;
gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
}
.item-card {
    transition: all .3s;
    padding: 20px;
    border: none;
}
.img-container {
    display: flex;
    height: 150px;
    overflow: hidden;
}
.img-product {
    width: 100%;
    object-fit: fill;
    object-position: center;
}

.item-card:hover {
    transform: scale(1.05);
    background-color: #D6D2C4;
    border: 2px solid #968C83;

}
.btn-product {
    padding: 10px;
    background-color: #968C83;
    color: white;
    border-radius: 0.5rem;
}
.btn-product:hover {
    background-color: #F7DAD9;
    color: black;
}
`

export default ProductList;