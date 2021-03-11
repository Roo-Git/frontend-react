import React, {useState, useEffect} from 'react';
import axios from 'axios'

import './Register.css'

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
  

  const handleState = (event) => {
    setRegister({...dataRegister, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };

  useEffect(() => {

  },[]);



  const postRegister = async () => {
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
  };


  return (
    <div className="masterRegister">
        <div className="spaceColumnRegister"></div>
        <div className="containerForm">
        <label>
          First Name:
        <Input type="text" name="firstName" onChange={handleState}/>
      </label>
      <label>
          Last Name:
        <Input type="text" name="lastName"onChange={handleState}/>
      </label>
      <label>
          Password:
        <Input type="password" name="password"onChange={handleState}/>
      </label>
      <label>
          E-mail:
        <Input type="text" name="email"onChange={handleState}/>
      </label>
      <label>
          Phone Number:
        <Input type="text"  name="phoneNumber"onChange={handleState}/>
      </label>
      <label>
          Address:
        <Input type="text" name="address"onChange={handleState}/>
      </label>
      <Submit  title="Enviar" onClick={() => postRegister()}/>
      </div>
      <div className="spaceColumnRegister"></div>
    </div>

  )

}


export default Register;