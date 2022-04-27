import React from 'react';
import '../Components/Navigation.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom'



function Navigation(props) {
    return (
        <NavBar>
        <div>
            <ul className='navbar-ul'>
                <Link to="/" className='navbar-li'>Home</Link>
                <Link to="/products" className='navbar-li'>Product</Link>
            </ul>
        </div>
        </NavBar>
    );
}

const NavBar = styled.div`
background-color: #968C83;
.navbar-ul {
    display: flex;
    justify-content: center;
}
.navbar-li {
   padding: 15px 50px;
   color: white;
}
.navbar-li:hover {
    background-color: #F7DAD9;
    color: black;
}
`

export default Navigation;