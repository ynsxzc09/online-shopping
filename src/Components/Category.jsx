import React from 'react';
import { useProductContext } from './Products/Product_Context';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function FilterContext(props) {
    const {items} = useProductContext();
    const filterItem = [...new Set(items.map((item) => item.category))];
    console.log(filterItem)
    return (
        <CategoryWrapper>
        <div>
            <ul>
                <li>All Category</li>
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
                <li>Category 4</li>
                <li>Category 5</li>
            </ul>
        </div>
        </CategoryWrapper>
    );
}

const CategoryWrapper = styled.div`
background-color: #D6D2C4;
div {
    width: 15vw;
    
}
ul {
    text-align: end;
    margin: 20px 5px 10px 10px ;
}
li{
    margin: 5px 0 5px 5px;
}
`


export default FilterContext;