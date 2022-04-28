import React from 'react';
import { formatPrice } from '../utils/helper';
import { useCartContext } from './Cart_Context';
import styled from 'styled-components';

function Cart(props) {
    const { cart, setQty, totalAmount, clearCart, removeItem, totalQuantity, setOpenModal } = useCartContext();

    if (!cart.length) {
        return <EmptyWrapper>
            <section className='cart'>
                <header>
                    <h1 className='empty'> My Cart</h1>
                </header>
            </section>
        </EmptyWrapper>
    }
    return <CartWrapper>
        <aside className='title-container'>
            <h1 className='cart-title'>My Cart</h1>
        </aside>
        {cart.map(({imageUrl, id, qty, productName, unitPrice}) => {
        return <>
            <aside className='container' key={id}>
                <aside className='item-list'>
                    <aside className='imgContainer'>
                        <img src={imageUrl} alt={productName} className='image'/>
                    </aside>
                    <aside className='qty'>
                        <h5>{productName}</h5>
                        <h6>{formatPrice(unitPrice)}</h6>
                        <aside className='qty-btn'>
                            <button name="decrease" onClick={(e) => {
                                const {name} = e.target;
                                setQty(name, id);
                            }} className='qty-btn1'>-</button>
                            <span>{qty}</span>
                            <button name="increase" onClick={(e) => {
                                const {name} = e.target;
                                setQty(name, id);
                            }} className='qty-btn1'>+</button>
                            <button className='qty-btn1' onClick={() => removeItem(id)} >Remove</button>
                            <br/>
                            <span><strong>TOTAL:</strong> { formatPrice(qty*unitPrice) }</span>
                        </aside>
                    </aside>
                </aside>
            </aside>
        </>
        }).reverse()}
        <hr/>
        <h5 className='total'>TOTAL AMOUNT: <br /> {formatPrice(totalAmount)}</h5>
        <h5 className='total'>TOTAL ITEMS: <br /> {totalQuantity} </h5>
        <aside className='btn-con'>
        <button onClick={clearCart} className="cart-btn">
            Clear Cart
        </button>
        <button className='cart-btn' onClick={() => {
            setOpenModal(true)
            setTimeout(() => {
                setOpenModal(false)
            }, 1500)
        }}>Check Out</button>
        </aside>
    </CartWrapper>
}

const CartWrapper = styled.aside`
background-color: #D6D2C4;
border-left: 2px solid black;
.title-container {
border-bottom: 3px solid black;
}
.container {
display: flex;
}
.item-list{ 
width: 21vw;
margin: 5px;
display: inline-flex;
background-color: white;
padding: 5px;
border: 1px solid #968C83;
}
.imgContainer {
display: flex;
height: 80px;
width: 80px;
overflow: hidden;
}
.image{
width: 100%;
object-fit: fill;
object-position: center;
margin: 0.5rem;
}
.btn-con {
display: flex;
justify-content: center;
}
.cart-btn{
margin: 10px;
padding: 5px 2rem;
background-color: #968C83;
color: white;
border-radius: 0.5rem;
}
.qty-btn1 {
margin: 2px;
padding: 2px;
background-color: #968C83;
color: white;
border-radius: 0.5rem;
}
.qty-btn {
margin: 3px;
}
.qty {
margin: 5px;
padding: 5px;
}
.cart-title{
    text-align: center;
    font-size: 2rem;
}
.total {
    margin: 7px;
}
@media screen and (min-width: 1400px) {
.container {
    width: 22.4vw;
}
.cart-btn{
margin: 1rem;
padding: 5px 4rem;
}
}
`     
const EmptyWrapper = styled.section`
background-color: #D6D2C4;
width: 22.5vw;
border-left: 2px solid black;
header {
    border-bottom: 2px solid black;
    /* width: 22vw; */
}
.empty {
    text-align: center;
    font-size: 2rem;
}

`

export default Cart;