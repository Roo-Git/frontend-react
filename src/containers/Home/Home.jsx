import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css'

const Home = (props) => {

   
  return ( 
    <div className="masterHome">
      <Header/>
      <Navbar/>
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