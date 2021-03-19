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
    console.log(result.data)
    return setTimeout(() => {history.push('/home')}, 1000);
  
  };
  
  return (
    <div className="masterLogin">
      <div className="containerLogin">
        <div className="leftImg">
          <img className="imgStyle" src={piñosChill} alt=""/>
        </div>
        <div className="masterForm">
          <div className="tituloLogin">Iniciar Sesión</div>
          <div className="loginForm">
            <div className="loginFormA">
  
              <div className="labelEmailLogin">EMAIL</div>
              <div className="inputLoginContainer">
                <Input type="text" name="email" onChange={handleState}/>
              </div>
              <div className="labelPwLogin">PASSWORD</div>
              <div className="inputLoginContainer">
                <Input type="password" name="password" onChange={handleState}/>
              </div>
            </div>  
          </div>
          <div className="containerSendLogin">
            <Submit title="Enviar" onClick={() => postLogin()}/>
          </div>
          <div className="containerGoToRegister">
            <Button name="Registrate" destiny='register'/>
          </div>
        </div>
      </div>
    </div>
      
  )

};

export default connect()(Login);


// Submit

// Buton

/*
<Input type="text" name="email" onChange={handleState}/>
<Input type="password" name="password" onChange={handleState}/>
<Submit title="Enviar" onClick={() => postLogin()}/>
<Button name="Registrate" destiny='register'/>
*/