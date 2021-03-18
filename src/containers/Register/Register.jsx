import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import './Register.css'

import {checkError} from '../../useful/Useful';
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';
import fondoRegister from '../../assets/Images/fondoRegister.jpeg';







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
      <div className="containerLogin">
      <img  className="imgStyleRegister"src={fondoRegister} alt=""/>
      </div>
        
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