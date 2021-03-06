import React from 'react';
import shopping from '../Assets/shopping gurl.png'
import styled from 'styled-components';

function Home(props) {
    return (
        <HomeStyle>
        <div className='home-container'>
            <div className='home-left'>
                <h1>Pikachu's Online Shopping</h1>
                <p>Choose Worry-Free Shopping With Pikachu's Online Shopping Shop Your Groceries Online! Get Online Exclusive Deals & Promos. We Accept Cash, E-Wallets, And Major Credit Cards.</p>
                <a href='/products' className='btn-home'>Get Started</a>
            </div>
            <div className='home-right'>
                <img src={shopping} alt='shopping gurl' className='shopping-gurl' />
            </div>
        </div>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
.home-container {
    background-color: #FFF5EA;
    display: flex;
}
.home-left {
    background-color: #D6D2C4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0 40px 40px;
    padding: 60px;
}
.home-left h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.home-left p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 15px;
    padding: 20px;
}
.btn-home {
    font-size: 15px;
    margin: 10px;
    padding: 10px 50px;
    border-radius: 25px;
    background-color: #968C83;
    color: white;
}
.btn-home:hover {
    background-color: #F7DAD9;
    color: black;
}
.home-right {
    background-color: #D6D2C4;
    margin: 40px 40px 40px 0;
    padding: 15px;
}
.shopping-gurl{
    width: 500px;
}

@media screen and (min-width:400px) {
    .home-left {
        margin: 20px 0 20px 20px;
        padding: 10px;
        
    }
    .home-left p {
        font-size: 8px;
    }
    .home-left h1{
        font-size: 10px;
    }
    .btn-home{
        margin: 5px;
        font-size: 10px;
        padding: 5px 10px;
    }
    .home-right {
margin: 20px 20px 20px 0;
padding: 20px;
    }
    .shopping-gurl {
        width: 130px;
        
    }
    
    
}
@media screen and (min-width: 900px) {
    .home-left {
        margin: 50px 0 50px 50px;
        padding: 20px;
        
    }
    .home-left p {
        font-size: 20px;
    }
    .home-left h1{
        font-size: 30px;
    }
    .btn-home {
font-size: 20px;
padding: 10px 30px;
    }
    .home-right {
        margin: 50px 50px 50px 0;
        padding: 20px;
        
    }
    .shopping-gurl{
        width: 500px;
    }
}

@media screen and (min-width:1400px) {
    .shopping-gurl{
        width: 700px;
    }
    .home-left{
        font-size: 30px;
        padding: 50px;
    }
    .home-left h1 {
        font-size: 40px;
    }
    .home-left p, .btn-home {
        font-size: 25px;
    }
    
}
`
export default Home;