import React, {useState, useEffect} from 'react';
import Input from '../../components/Input/Input';
import axios from 'axios';

import './Login.css'
import Submit from '../../components/Submit/Submit';

const Login = () => {

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
  }

  return (
    <div className="masterLogin">
      <div className="spaceColumnLogin"></div>
      <div className="containerLogin">
        <div className="loginForm">
          <label>
              E-mail:
            <Input type="email" name="email" onChange={handleState}/>
          </label>
          <label>
              Password:
            <Input type="password" name="password" onChange={handleState}/>
          </label>
        </div>
        <Submit type="submit" name="submit" title="Enviar" onClick={() => postLogin()}/>
      </div>
        <div className="spaceColumnLogin"></div>
    </div>

  )

}


export default Login;