import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// REDUX
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/Types/customerType.js';

import './Login.css';

import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';
// import {checkError, checkAge} from '../../useful/Useful';
import piñosChill from '../../assets/Images/piñosChill.jpeg';

import Button from '../../components/Button/Button'




const Login = (props) => {

  const history = useHistory();

  const [dataLogin,setLogin] = useState({

    email : '',
    password: ''

  });

  const handleState = (event) => {
    setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };

  useEffect(() => {

  },[]);



  const postLogin = async () => {

    let result = await axios.post('http://localhost:3000/customers/login', dataLogin);

    // Guardamos en RDX
    props.dispatch({type: LOGIN, payload: result.data});
    return setTimeout(() => {
    history.push('/home')
    }, 500);
    
  };
  
  return (
    <div className="masterLogin">
      <div className="containerLogin">
        <div className="leftImg">
          <img className="imgStyle" src={piñosChill} alt=""/>
        </div>
        <div className="masterForm">
          <div className="tituloIniciarSesion">Iniciar Sesión</div>
º           <div className="labelEmail">EMAIL</div>
          <div className="inputEmail">
            <Input type="text" name="email" onChange={handleState}/>
          </div>
          <div className="spaceForm"></div>
          <div className="labelEmail">PASSWORD</div>
          <div className="inputEmail">
            <Input type="password" name="password" onChange={handleState}/>
          </div>
          <div className="spaceForm"></div>
          <div className="containerSendRegister">
            <div className="send">
            <Submit title="Enviar" onClick={() => postLogin()}/>
            </div>   
            <div className="register">
            <Button name="Registrate" destiny='register'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};

export default connect()(Login);


// Submit

// Buton