import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

//  Carousel Images
import docLaMuela from '../../assets/Images/docLaMuela.jpeg';
import niños from '../../assets/Images/niños.jpeg';
import loveMyDentist from '../../assets/Images/loveMyDentist.jpg';
import implant from '../../assets/Images/implant.jpg';
import PortadaSonrisas from '../../assets/Images/PortadaSonrisas.jpeg'



import './Home.css'

const Home = () => {

  
  return ( 

    <div className="masterHome">
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
          {/* <img className="styleImg" src={cepillateLosDientes} alt=""/> */}
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
    </div>
  )
}

export default Home;


