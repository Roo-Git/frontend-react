import React, {useState, useEffect} from 'react';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input';


import './Register.css'

const Register = (props) => {


  return (
    <div className="masterRegister">
        <div className="spaceColumnRegister"></div>
        <div className="containerForm">
        <label>
          First Name:
        <Input type="text" name="firstName"/>
      </label>
      <label>
          Last Name:
        <Input type="email" name="lastName"/>
      </label>
      <label>
          Password:
        <Input type="password" name="password"/>
      </label>
      <label>
          E-mail:
        <Input type="email" name="email"/>
      </label>
      <label>
          Phone Number:
        <Input type="string" name="phoneNumber"/>
      </label>
      <label>
          Address:
        <Input type="string" name="address"/>
      </label>
      <Button name='Register' destiny=''/>
      </div>
      <div className="spaceColumnRegister"></div>
    </div>

  )

}


export default Register;