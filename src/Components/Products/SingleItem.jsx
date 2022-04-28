import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCartContext } from '../Cart/Cart_Context';
import {useProductContext} from './Product_Context'
import {formatPrice} from '../utils/helper.js'
import styled from 'styled-components'

function SingleItem(props) {
    const navigate = useNavigate();
    const {items} = useProductContext();
    const { addItem } = useCartContext();
    const {id} =useParams();
    const singleItem = items.filter((item) => item.id === id );
    return <Wrapper>
        {singleItem.map(({imageUrl, id, description, productName, unitPrice}) => {
        return <>
            <div className='details-container' key={id}>
                <div className='img-contain'>
                <img src={imageUrl} alt={productName}/>
                </div>
                <div className='info-container'>
                <h4>{productName}</h4>
                <p>{formatPrice(unitPrice)}</p>
                <p>{description}</p>
                <button onClick={() => { addItem({imageUrl, id, description, productName, unitPrice}) 
                navigate("/products")}} className='btn-product'>Add to Cart</button>
                </div>
            </div>
        </>
        })}
    </Wrapper>
}

const Wrapper = styled.div`
.btn-product {
    margin: 2rem 10px;
    padding: 10px;
    background-color: #968C83;
    color: white;
    border-radius: 0.5rem;
}
.details-container{
background-color: #D6D2C4;
border: 2px solid #968C83;
margin: 11rem;
display: flex;
justify-content: center;
align-items: center;
padding: 20px
}
.img-contain {
display: flex;
overflow: hidden;
height: 30rem;
width: 40rem;
}
img {
    width: 100%;
    object-fit: fill;
    object-position: center;
}
.info-container {
    margin: 10px;
    padding: 20px;
}
.info-container h4 {
    font-size: 2rem;
}
`

export default SingleItem;