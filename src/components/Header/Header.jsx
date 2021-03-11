import React from 'react'
import Button from '../Button/Button';
import './Header.css'
import logoDentista from '../../assets/logoDentista.png';


const Header = () => {
  return (
   
  <div className="header">
      <div className="containerLogoTitulo">
      <div className="logoContainer">
      <img className="logoImg"src={logoDentista} alt=""/>
      </div>
      <div className="titulo">Clinica de Barrio: Dr. La Muela</div>
      </div>
      <div className="navbar">Navbar
          <Button name='Register' destiny='register'/>
          <Button name='Login' destiny='login'/>
      </div>
      <div className="containerPhone">
          <div className="logoPhone">Logo</div>
          <div className="phoneNumber">Phone Number</div>
      </div>
  </div>
  )
}

export default Header
