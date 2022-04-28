import React from 'react';
import { useProductContext } from '../Products/Product_Context';
import styled from 'styled-components';
import { useCategoryContext } from './filterContext';

function FilterContext(props) {
    const {items} = useProductContext();
    const {updateFilter, filter } = useCategoryContext();
    const filterItem = ["all", ...new Set(items.map((item) => item.category))];
    return (
        <CategoryWrapper>
        <div>
        <h5>Category</h5>
        <input type="text" name="search" value={filter.search} placeholder="Search" onChange={(e) => {
            const {name, value} = e.target
            updateFilter(name, value)}} />
        {filterItem.map((category, id) =>{
        return <button className='btn-filter' key={id} name="category" onClick={(e) => { 
            const { name, innerText:value} = e.target
            updateFilter(name, value)}}>{category}</button>
        })}
        <select  name="price" value={filter.price} onChange={(e) => {
            const {name, value} = e.target
            updateFilter(name, value)}}>
            <option value="lowest">Lowest Price to Highest</option>
            <option value="highest">Highest Price to Lowest</option>
            </select>

        </div>
        </CategoryWrapper>
    );
}

const CategoryWrapper = styled.div`
background-color: #D6D2C4;
border-right: 2px solid black;
overflow: hidden;
div {
text-align: center;
width: 15vw;
display: flex;
flex-direction: column;
}
.btn-filter{
text-transform: capitalize;
margin: 10px;
text-align: start;
border: none;
font-size: 1rem;
background-color: #D6D2C4;
cursor: pointer;
}
input, select {
margin: 10px 30px;
padding: 5px
}

`


export default FilterContext;