import React from 'react'
import Button from '../Button/Button';
import './Header.css'
import logoBussines from '../../assets/logoBussines.jpg';


const Header = () => {
  return (
    
   
  <div className="header">

    <div className="spaceRow1"></div>

    <div className="containerLogoBussines">
        <img className="logoBussines"src={logoBussines} alt=""/>
    </div>
      
    <div className="containerTitle">
        <div className="title1">Doc.</div>
        <div className="title2">La Muela</div>
    </div>

    <div className="spaceRow2"></div>

    <div className="containerButtons">
        <Button name="Iniciar Sesión" destiny='login'/>
        <Button name="Registrate" destiny='register'/>
    </div>

    <div className="column"></div>

  </div>



  )
}



export default Header

