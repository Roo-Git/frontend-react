import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import './Register.css'

import {checkError} from '../../useful/Useful';
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'



const Register = () => {

  const history = useHistory();

  const [dataRegister, setRegister] = useState({
    
    
    firstName : '',
    lastName : '',
    password : '', 
    email : '',
    phoneNumber : '',
  });

  const [message, setMessage] = useState('');
  
  // HANDLERS

  const handleState = (event) => {
    setRegister({...dataRegister, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };

  // FUNCTIONS

  const sendData = async () => {
  
    setMessage('');

    let messageError = checkError(dataRegister);
    setMessage(messageError);

    if(messageError){
      return;
    };

    let body = { 
      firstName: dataRegister.firstName,
      lastName: dataRegister.lastName,
      password: dataRegister.password,
      email: dataRegister.email,
      phoneNumber: dataRegister.phoneNumber,
    };

    let result = await axios.post('http://localhost:3000/customers/', body);
    console.log(result)

    return setTimeout(() => {
      history.push('/profile')
    }, 1000);

  }

  return (
    
    <div className="masterRegister">
        <Header/>
        <Navbar/>
      {/* <pre>{JSON.stringify(dataRegister, null,2)}</pre> */}
      <div className="spaceColumnRegisterUp"></div>
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
        <Input type="email" maxLength="30"name="email"onChange={handleState}/>
      </label>
      <label>
          Phone Number:
        <Input type="text"  maxLength="12" name="phoneNumber"onChange={handleState}/>
      </label>
      <div>{message}</div>
      <Submit title="Enviar" onClick={() => sendData()}/>
      </div>
      <div className="spaceColumnRegisterDown"></div>
      <Footer/>
    </div>

  )

};

// <div>{messageDate}</div>

export default Register;