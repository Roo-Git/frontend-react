import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import './Register.css'

import {checkError} from '../../useful/Useful';
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';
import fondoRegister from '../../assets/Images/fondoRegister.jpeg';

import leaderboardOne from '../../assets/Images/leaderboardOne.jpeg';
import leaderboardTwo from '../../assets/Images/leaderboardTwo.jpeg';
import leaderboardThree from '../../assets/Images/leaderboardThree.jpeg';



const Register = () => {

  const history = useHistory();

  const [dataRegister, setRegister] = useState({
    
    firstName   : '',
    lastName    : '',
    password    : '', 
    email       : '',
    phoneNumber : '',
    address     : ''
  });
  

  const [message, setMessage] = useState('');
  
  // HANDLERS

  const handleState = (event, props) => {
    setRegister({...dataRegister, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };


  useEffect(()=>{

  },[]);

  useEffect(()=>{

  });

  useEffect(()=>{
    
    return()=>{

    }
  },[]);
  
  // FUNCTIONS
  
  const sendData = async () => {
    
  
    setMessage('');

    let messageError = checkError(dataRegister);
    setMessage(messageError);

    if(messageError){
      return;
    };
    console.log(dataRegister.firstName)

    let body = { 
      firstName: dataRegister.firstName,
      lastName: dataRegister.lastName,
      password: dataRegister.password,
      email: dataRegister.email,
      phoneNumber: dataRegister.phoneNumber,
      address: dataRegister.address
    };
    console.log(body)
    let result = await axios.post('http://localhost:3000/customers/', body);
    console.log(result)

    return setTimeout(() => {
      history.push('/login')
    }, 500);

  }

  return (
    
    <div className="masterRegister">

      <div className="containerHeader">
        <img  src={leaderboardOne}/>
        <img  src={leaderboardTwo}/>
        <img  src={leaderboardThree}/>
      </div>

      <div className="navbar"></div>

      <div className="containerRegister">
          <img  className="imgStyleRegister"src={fondoRegister} alt=""/>

          <div className="masterFormRegister">

            <div className="tituloRegistro">Registro</div>
              <div className="registerForm">
                <div className="registerFormA">
                  <div className="labelFirstNameRegister">NOMBRE</div>
                  <div className="inputFormContainerRegister">
                    <Input type="text" maxLength="30" name="firstName" onChange={handleState}/>
                  </div>
                  <div className="labelLastNameRegister">PRIMER APELLIDO</div>
                  <div className="inputFormContainerRegister">
                    <Input type="text" maxLength="30" name="lastName"onChange={handleState}/>
                  </div>
                  <div className="labelPasswordRegister">CONTRASEÑA</div> 
                  <div className="inputFormContainerRegister">
                    <Input type="password" maxLength="12" name="password"onChange={handleState}/>
                  </div>
                </div>
                <div className="registerFormB">
                  <div className="labelEmailRegister">EMAIL</div>
                  <div className="inputFormContainerRegister">
                    <Input type="email" maxLength="50"name="email"onChange={handleState}/>
                  </div>
                  <div className="labelPhoneRegister">TELEFONO</div>
                  <div className="inputFormContainerRegister">
                    <Input type="text"  maxLength="12" name="phoneNumber"onChange={handleState}/>
                  </div>
                  <div className="labelHomeRegister">DIRECCION</div>
                  <div className="inputFormContainerRegister">
                    <Input type="text"  maxLength="20" name="address"onChange={handleState}/>
                  </div>
                </div>
              </div>
            <div className="sendRegister">
              <Submit title="Enviar" onClick={() => sendData()}/>
            </div>
          </div>
      </div>
      <div>{message}</div>
      <div className="spaceRowColor"></div>   
    </div>
        

  )

};

// <div>{messageDate}</div>

export default Register;


/* 
<div className="containerForm">
          <label>
            First Name:
          <Input type="text" maxLength="30" name="firstName" onChange={handleState}/>
          </label>
          <label>
              Last Name:
            <Input type="text" maxLength="30" name="lastName"onChange={handleState}/>
          </label>
          <label>
              Password:
            <Input type="password" maxLength="12" name="password"onChange={handleState}/>
          </label>
          <label>
              E-mail:
            <Input type="email" maxLength="50"name="email"onChange={handleState}/>
          </label>
          <label>
              Phone Number:
            <Input type="text"  maxLength="12" name="phoneNumber"onChange={handleState}/>
          </label>
          <label>
              address:
            <Input type="text"  maxLength="20" name="address"onChange={handleState}/>
          </label>

          <div>{message}</div>
          <Submit title="Enviar" onClick={() => sendData()}/>
        </div>
      

*/