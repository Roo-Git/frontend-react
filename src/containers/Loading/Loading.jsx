import React from 'react'
import {Link} from 'react-router-dom'

import './Loading.css';
import cepillateLosDientes from '../../assets/Images/cepillateLosDientes.gif'

const Loading = () => {


  return (
    <div className="gifContainer">
      <Link to="/home"><img className="styleGif" src={cepillateLosDientes} alt=""/></Link>
    </div>
  )
}

export default Loading
