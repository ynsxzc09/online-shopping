import React from 'react';
import { useProductContext } from '../Products/Product_Context';
import styled from 'styled-components';
import { useCategoryContext } from './filterContext';

function FilterContext(props) {
    const {items} = useProductContext();
    const {updateFilter} = useCategoryContext();
    const filterItem = ["All", ...new Set(items.map((item) => item.category))];
    return (
        <CategoryWrapper>
        <div>
        <h5>Category</h5>
        {filterItem.map((category, id) =>{
        return <button className='btn-filter' key={id} name={category} onClick={(e) => { updateFilter(e.target.name)}}>{category}</button>
            
        })}
            
        </div>
        </CategoryWrapper>
    );
}

const CategoryWrapper = styled.div`
background-color: #D6D2C4;
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
}
`


export default FilterContext;