import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './Login.css'

import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';
// import {checkError, checkAge} from '../../useful/Useful';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'


const Login = () => {

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
    console.log(result)

      return setTimeout(() => {
        history.push('/profile')
    }, 1000);
  };

  const goToRegister = () => {
    history.push('/register')
  }

  return (
    <div className="masterLogin">
      <Header/>
      <Navbar/>
      <div className="spaceBetweenHead"></div>
      {/* <div className="spaceColumnLogin"></div> */}
      <div className="containerLogin">
      <div className="loginForm">
        <label>
            E-mail:
          <Input type="text" name="email" onChange={handleState}/>
        </label>
        <label>
            Password:
          <Input type="password" name="password" onChange={handleState}/>
        </label>
        <div className="register" onClick={goToRegister}>click here to register</div>
      </div>
      <Submit type="submit" name="submit" title="Enviar" onClick={() => postLogin()}/>
      </div>
      <div className="spaceColumnLogin"></div>
      <Footer/>
    </div>

  )

};

export default Login;