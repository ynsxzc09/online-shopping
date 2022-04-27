import React from 'react';
import { useParams } from 'react-router-dom';
import {useProductContext} from './Product_Context'
import {formatPrice} from '../utils/helper.js'

function SingleItem(props) {
    const {items} = useProductContext();
    const {id} =useParams();
    const singleItem = items.filter((item) => item.id === id );
    return <>
        {singleItem.map(({imageUrl, id, description, productName, unitPrice}) => {
        return <>
            <div className='details-container' key={id}>
                <div className='img-contain'>
                    <img src={imageUrl} alt={productName}/>
                </div>
                <h4>{productName}</h4>
                <p>{formatPrice(unitPrice)}</p>
                <p>{description}</p>
            </div>
        </>
        })}
    </>
}

export default SingleItem;