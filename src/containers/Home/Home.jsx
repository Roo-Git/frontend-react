import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

//  Carousel Images

import leaderboardOne from '../../assets/Images/leaderboardOne.jpeg';
import leaderboardTwo from '../../assets/Images/leaderboardTwo.jpeg';
import leaderboardThree from '../../assets/Images/leaderboardThree.jpeg';
import user from '../../assets/Images/user.jpeg';



import './Home.css'

const Home = () => {

  
  return ( 

    <div className="masterHome">

      <div className="containerHeader">
        <img  src={leaderboardOne}/>
        <img  src={leaderboardTwo}/>
        <img  src={leaderboardThree}/>
      </div>

      <div className="navbar"></div>

      <div className="containerHomeMainUser">

        <div className="containerMain"></div>

        <div className="containerUser">
          <div className="section">
            <div className="imgUser"><img src={user}/></div>
            <div className="buttonRegisterHome"><Button name="Registrate" destiny='register'/> </div>
            <div className="buttonLoginHome"><Button name="Login" destiny='login'/> </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;


/*
 <Navbar/>
      <Header/>
      <div className="spaceBtwHead">
        <p className="welcomeMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="descriptionMessage">Rem similique voluptates ipsam commodi facere totam repellendus mollitia consequatur obcaecati, assumenda tempore nulla atque fugiat beatae provident soluta molestias modi ducimus?</p>
      </div>
      <div className="carouselContainer">
        <Carousel 
          infinite 
          autoPlay={3000}
          animationSpeed={2000}
        >
          {/* <img className="styleImg" src={cepillateLosDientes} alt=""/> }*/ /*
          <img className="styleImg" src={docLaMuela} alt=""/>
          <img className="styleImg" src={niños} alt=""/>
          <img className="styleImg" src={loveMyDentist} alt=""/>
          <img className="styleImg" src={implant} alt=""/>
          <img className="styleImg" src={PortadaSonrisas} alt=""/>
        </Carousel>
      </div>
      <div className="spaceRowHome"></div>
      <div className="masterCardContainer">
       <Cards/>
      </div>
      <div className="spaceRowHome"></div>
      <Footer/>
*/