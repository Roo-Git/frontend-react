import React from 'react'
import './Cards.css'

// Icons
import ortodoncia from '../../assets/CardIcons/ortodoncia.png'
import ortodonciaInvisible from '../../assets/CardIcons/ortodonciaInvisible.png'
import endodoncia from '../../assets/CardIcons/endodoncia.png'
import diente from '../../assets/CardIcons/diente.png'
import implante from '../../assets/CardIcons/implante.png'
import sonrisa from '../../assets/CardIcons/sonrisa.png'


const Cards = () => {
  return (
    <div className="cardsContainer">
      <div className="serviceCardContainer1">
        <div className="card">
          <img className="icons" src={ortodoncia} alt=""/>
          <p className="especialidad">
            Ortodoncia
          </p>
          <p className="descripcion">
            Especialidad encargada de alinear los dientes en las arcadas dentarias
          </p>
        </div>
        <div className="card">
        <img className="icons" src={diente} alt=""/>
          <p className="especialidad">
            Periodoncia
          </p>
          <p className="descripcion">
            Estudia la prevención, diagnóstico y tratamiento de las enfermedades.
          </p>
        </div>
        <div className="card">
        <img className="icons" src={ortodonciaInvisible} alt=""/>
          <p className="especialidad">
            Ortodoncia Invisible
          </p>
          <p className="descripcion">
            Los brackets van desapareciendo en el mundo de la ortodoncia
          </p>
        </div>
      </div>
      <div className="serviceCardContainer2">
        <div className="card">
        <img className="icons" src={endodoncia} alt=""/>
          <p className="especialidad">
            Endodoncia
          </p>
          <p className="descripcion">
            La endodoncia es un tratamiento de conductos radiculares.
          </p>
        </div>
        <div className="card">
        <img className="icons" src={implante} alt=""/>
          <p className="especialidad">
            Implantes Dentales
          </p>
          <p className="descripcion">
            La salud de sus dientes es casi tan importante como la estética de los mismos.
          </p>
        </div>
        <div className="card"> 
        <img className="icons" src={sonrisa} alt=""/>         
          <p className="especialidad">
            Estética Dental
          </p>
          <p className="descripcion">
            Soluciona problemas relacionados con la salud bucal y la armonía estética de la boca
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cards





