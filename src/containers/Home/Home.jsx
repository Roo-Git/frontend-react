import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';



import leaderboardOne from '../../assets/Images/leaderboardOne.jpeg';
import leaderboardTwo from '../../assets/Images/leaderboardTwo.jpeg';
import leaderboardThree from '../../assets/Images/leaderboardThree.jpeg';
import user from '../../assets/Images/user.jpeg';
import superDoc from '../../assets/Images/superDoc.png';
import iconGridUno from '../../assets/Icons/iconGridUno.png';
import iconGridDos from '../../assets/Icons/iconGridDos.png';
import iconGridTres from '../../assets/Icons/iconGridTres.png';
import iconGridCuatro from '../../assets/Icons/iconGridCuatro.png';




import './Home.css'
import UserBox from '../../components/UserBox/UserBox';

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

        

          <div className="sectionMain">
            <div className="imgDoc"><img src={superDoc} alt=""/></div>
            <div className="tituloMain">
              <p className="tituloMainDoc">Doc. La Muela</p>
              <p>Sacando Muelas desde 1978</p>
            </div>
          </div>
          
        



        

          <div className="sectionUser">
            <div className="imgUser"><img src={user}/></div>
            <UserBox/>
          </div>

        

      </div>

      <div className="spaceRow"></div>

      <div className="superGridContainer">
          <div className="gridContainer">
            <div className="backgroundGrid">
              <div className="tittleGrid">Título</div>
              <div className="containerIconGrid"><img src={iconGridUno}/></div>
              <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> <br></br>Quae voluptatem dolorem neque quo eaque amet veritatis aliquid a deleniti porro. <br></br> <br></br>Voluptas voluptatem quod maiores ipsum, omnis nesciunt impedit asperiores veniam.</p>
            </div>
            <div className="backgroundGrid">
              <div className="tittleGrid">Título</div>
              <div className="containerIconGrid"><img src={iconGridDos}/></div>
              <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> <br></br>Quae voluptatem dolorem neque quo eaque amet veritatis aliquid a deleniti porro. <br></br> <br></br>Voluptas voluptatem quod maiores ipsum, omnis nesciunt impedit asperiores veniam.</p>
            </div>
            <div className="backgroundGrid">
              <div className="tittleGrid">Título</div>
              <div className="containerIconGrid"><img src={iconGridTres}/></div>
              <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> <br></br>Quae voluptatem dolorem neque quo eaque amet veritatis aliquid a deleniti porro. <br></br> <br></br>Voluptas voluptatem quod maiores ipsum, omnis nesciunt impedit asperiores veniam.</p>
            </div>
            <div className="backgroundGrid">
              <div className="tittleGrid">Título</div>
              <div className="containerIconGrid"><img src={iconGridCuatro}/></div>
              <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> <br></br>Quae voluptatem dolorem neque quo eaque amet veritatis aliquid a deleniti porro. <br></br> <br></br>Voluptas voluptatem quod maiores ipsum, omnis nesciunt impedit asperiores veniam.</p>
            </div>
          </div>
      </div>

      <div className="spaceRowColor"></div>


    </div>
  )
}

export default Home;


