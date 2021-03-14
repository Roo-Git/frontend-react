import React, {useState} from 'react';
import axios from 'axios'

import './Register.css'

import {checkError, checkAge} from '../../useful/Useful';
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';


const Register = () => {

  const [dataRegister, setRegister] = useState({
    

    firstName : '',
    lastName : '',
    password : '', 
    email : '',
    phoneNumber : '',
    address : ''

  });

  const [message, setMessage] = useState('');
  //const [messageDate, setMessageDate] = useState('');

  
  // HANDLERS

  const handleState = (event) => {
    setRegister({...dataRegister, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };



  // FUNCTIONS


  const sendData = async () => {
    

    setMessage('');

    //let errorDate = checkAge(dataRegister.date, 17);
    //setMessageDate(errorDate);

    //if(errorDate) {
      //return;
    //};

    let messageError = checkError(dataRegister);
    console.log(messageError)
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

    let result = await axios.post('http://localhost:3000/customers/', body);
    console.log(result)


  }





  return (
    <div className="masterRegister">
      <pre>{JSON.stringify(dataRegister, null,2)}</pre>
        <div className="spaceColumnRegister"></div>
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
      <label>
          Address:
        <Input type="text" maxLength="50" name="address"onChange={handleState}/>
      </label>
      <div>{message}</div>
      <Submit  title="Enviar" onClick={() => sendData()}/>
      </div>
      <div className="spaceColumnRegister"></div>
    </div>

  )

}

// <div>{messageDate}</div>

export default Register;