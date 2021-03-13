import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Cards from '../../components/Cards/Cards';

//  Carousel Images
import dentistWithBoy from '../../assets/Images/dentistWithBoy.jpg';
import dentistCovid from '../../assets/Images/dentistCovid.jpg';
import dentist from '../../assets/Images/dentist.jpg';
import loveMyDentist from '../../assets/Images/loveMyDentist.jpg';
import implant from '../../assets/Images/implant.jpg';
import dentistWoman from '../../assets/Images/dentistWoman.jpg';


import './Home.css'
import Footer from '../../components/Footer/Footer';

const Home = () => {

  
  return ( 

    <div className="masterHome">
      <Header/>
      <Navbar/>
      <div className="spaceBtwHead"></div>
      <div className="carouselContainer">
        <Carousel 
          infinite 
          autoPlay={3000}
          animationSpeed={2000}
        >
          <img className="imgStyle" src={dentistWithBoy} alt=""/>
          <img className="imgStyle" src={dentistCovid} alt=""/>
          <img className="imgStyle" src={dentist} alt=""/>
          <img className="imgStyle" src={loveMyDentist} alt=""/>
          <img className="imgStyle" src={implant} alt=""/>
          <img className="imgStyle" src={dentistWoman} alt=""/>
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


