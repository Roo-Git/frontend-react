import React from 'react';
// import Button from '../../components/Button/Button';
import './Home.css'

const Home = (props) => {

   
//<Button nombre='Register' destino='register'/>
    return (
        <div className="masterHome">
            <div className="header">
                <div className="containerLogoTitulo">
                <div className="logo">Logo Empresa</div>
                <div className="titulo">Título Empresa</div>
                </div>
                <div className="navbar">Navbar</div>
                <div className="containerPhone">
                    <div className="logoPhone">Logo</div>
                    <div className="phoneNumber">Phone Number</div>
                </div>
            </div>
            <div className="spaceRowHome"></div>
            <div className="carouselContainer">Carousel Container</div>
            <div className="spaceRowHome"></div>
            <div className="masterCardContainer">
                <div className="spaceColumnHome"></div>
                <div className="serviceCardContainer">Service Card Container</div>
                <div className="spaceColumnHome"></div> 
            </div>
            <div className="spaceRowHome"></div>
            <div className="footerContainer">Footer</div>  
        </div>
    )
}

export default Home;