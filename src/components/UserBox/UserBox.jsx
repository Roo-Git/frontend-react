import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import Button from '../Button/Button';
import Submit from '../Submit/Submit'
import './UserBox.css';
import { LOGOUT } from '../../redux/Types/customerType.js';

const UserBox = (props) => {

  let history = useHistory();

  //procedemos a borrar los datos de usuario 
  //de RDX y así conseguiremos el logOut

  const logOut =  () => {

    props.dispatch({ type: LOGOUT, payload : {}});

    setTimeout(()=> {
        history.push('/Home');
    },300);
  };

  

  if(props.customer?.id){

    return (

      // Vista Login

        <div className="header">

          <div className="containerButtons">
            <div className="customerName">
              ¡Hola {props.customer?.firstName}!
            </div>
            <div className="profileButton">
            <Button name="Perfil" destiny='profile'/>
            </div>
        </div>
      </div>
    )
 
  } else {

    return (

      // Vista Normal
    
      <div className="header">

        <div className="containerButtons">
          <div className="buttonLogin">
            <Button name="Iniciar Sesión" destiny='login'/>
          </div>
          <div className="buttonRegister">
            <Button name="Registrate" destiny='register'/>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    customer : state.customerReducer.customer,
    token : state.customerReducer.token
  }
};

export default connect(mapStateToProps)(UserBox);


// Lo vas a necesitar en Profile Roo //

/*<Submit type="submit" name="Salir" title="logout" onClick={() => logOut()}/>
  <p><Link to="/Appointment" alt="">citas</Link></p> */