import React from 'react';
import styled from 'styled-components';

function Modal(props) {
    return <Wrapper>
        <div>
            <h1>Thank You For Purchasing</h1>
        </div>
    </Wrapper>;
}

const Wrapper = styled.div`
text-align: center;
position: fixed;
top: 0;
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.5);
color: white;
font-size: 3rem;
`

export default Modal;