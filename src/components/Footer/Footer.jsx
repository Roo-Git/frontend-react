import React from 'react';

import './Footer.css';
import facebook from '../../assets/FooterlIcons/facebook.png';
import direccion from '../../assets/FooterlIcons/direccion.png';
import instagram from '../../assets/FooterlIcons/instagram.png'
import telefono from '../../assets/FooterlIcons/telefono.png'
import twiter from '../../assets/FooterlIcons/twiter.png'
import whatsapp from '../../assets/FooterlIcons/whatsapp.png'

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="hours">
        <p className="highlightedText">Horarios:</p><hr></hr>
        De Lunes a Viernes<hr></hr>  
        Mañanas 9h a 14h<hr></hr> 
        Tardes 16h a 20h  
      </div>
      <div className="address">
        <p className="highlightedText"><img src={direccion} alt=""/>Dirección:</p><hr></hr>
        c/ Jhony me Lavo n 3<hr></hr>
        Metro Línea 20 parada Liada Petunia<hr></hr>
        EMT Líneas 24,39,11
      </div>
      <div className="socialNetworks">
        <p className="highlightedText callMe">Llámanos:</p><hr></hr>
        <div className="telephones">
          <p><img src={telefono} alt=""/>96 3587965412</p>
          <p><img src={whatsapp} alt=""/>6987452147</p>
        </div><hr></hr>
        <p className="textSocialNetworks">Síguenos en Redes Sociales</p><hr></hr>
        <div className="iconsContainer">
          <a href="https://es-es.facebook.com/"><img className="icons" src={facebook} alt=""/></a>
          <a href="https://www.instagram.com/"><img className="icons" src={instagram} alt=""/></a>
          <a href="https://www.https://twitter.com/.com/"><img className="icons" src={twiter} alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer

