import React, {useState, useEffect} from 'react';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input';

import './Login.css'

const Login = (props) => {



  return (
    <div className="masterLogin">
      <div className="spaceColumnLogin"></div>
      <div className="containerLogin">
        <div className="loginForm">
          <label>
              E-mail:
            <Input type="email" name="email"/>
          </label>
          <label>
              Password:
            <Input type="password" name="password"/>
          </label>
        </div>
        <Button name='login' destiny=''/>
      </div>
        <div className="spaceColumnLogin"></div>
    </div>

  )

}


export default Login;