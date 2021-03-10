import React from 'react'
import Button from '../Button/Button';


const Navbar = () => {
  return (
   
  <div className="header">
      <div className="containerLogoTitulo">
      <div className="logo">Logo Empresa</div>
      <div className="titulo">Título Empresa</div>
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

export default Navbar
