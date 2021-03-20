import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import Button from '../Button/Button';
import Submit from '../Submit/Submit'
import './Header.css';
import { LOGOUT } from '../../redux/Types/customerType.js';

const Header = (props) => {

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
        <div className="header">
  
        <div className="spaceRow1"></div>
  
        <div className="containerLogoBussines">
          <p><Link to="/Home"><img className="logoBussines" alt=""/></Link></p>
        </div>
          
        <div className="containerTitle">
          <div className="title1">Doc.</div>
          <div className="title2">La Muela</div>
        </div>
  
        <div className="spaceRow2"></div>
        <div className="containerButtons">
          <div className="customerName">
              Hola {props.customer?.firstName}
          </div>
        <Button name="Profile" destiny='profile'/>
        <Submit type="submit" name="submit" title="logout" onClick={() => logOut()}/>
        <p><Link to="/Appointment" alt="">citas</Link></p>
        </div>
      </div>
    )
 
  } else {

    return (

      // Vista Normal
    
      <div className="header">
  
        <div className="spaceRow1"></div>
  
        <div className="containerLogoBussines">
          <p><Link to="/Home"><img className="logoBussines" alt=""/></Link></p>
        </div>
          
        <div className="containerTitle">
          <div className="title1">Doc.</div>
          <div className="title2">La Muela</div>
        </div>
  
        <div className="spaceRow2"></div>
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

export default connect(mapStateToProps)(Header);