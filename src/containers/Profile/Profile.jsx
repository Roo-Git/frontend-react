import React,{useEffect} from "react";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { LOGOUT } from '../../redux/Types/customerType.js';

import axios from 'axios';

// RDX
import { SHOW } from '../../redux/Types/appointmentType'

import './Profile.css'
import Submit from '../../components/Submit/Submit'
import Button from  '../../components/Button/Button';


const Profile = (props) => {

  let history = useHistory();

  const logOut =  () => {

    props.dispatch({ type: LOGOUT, payload : {}});

    setTimeout(()=> {
        history.push('/Home');
    },300);
  };

  console.log("dentro de profile",props.customer.token)
  const getAppointments = async () =>{
    let result = await axios.get(
      `http://localhost:3001/appointments/
      ${props.customer.customer?.id}/`, 
      {headers: {"Authorization" : `Bearer ${props.customer.token}`}});    
    console.log(result.data)
    props.dispatch({type: SHOW, payload: result.data});
  }

  useEffect(()=>{
    getAppointments();

  },[])

  if(props.customer?.id) {
    return (
      <div className="masterProfile">

        <div className="containerProfile">
          
          <div className="masterFormProfile">
            <div className="tituloProfile">Perfil</div>
            <div className="perfilForm">
                <div>
                  Nombre: {props.customer?.firstName} {props.customer?.lastName}
                </div>
                <div>
                  Email: {props.customer?.email}
                </div>
                <div>
                  Teléfono: {props.customer?.phoneNumber}
              </div>
               <div>
                  Calle: {props.customer?.address}
              </div>
              <div>
                  Citas: 
              </div>
            </div>
          </div>
          <div className="masterAccionesProfile">
            <div className="tituloAccionesProfile">Acciones</div>
            <div className="accionesProfile"></div>
            <div className="botonSinPintarPedirCita">METER AQUI</div>
            <div className="logoutContainer"><Submit type="submit" name="Salir" title="Logout" onClick={() => logOut()}/></div>
            
          </div>
        </div>
    </div>
    )
  }else {
    console.log("Soy el Else de profile")
    return(
      <div>
        No estas registrado aún!!! 
        <div className="register">
          <Button name="Registrate" destiny='register'/>
        </div>
        <div class="sk-chase">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
      </div>
    )
  }

};

const mapStateToProps = state => {
  return {
    customer : state.customerReducer.customer,
    appointment: state.appointmentReducer.appointment
  }
};

export default connect(mapStateToProps)(Profile)



/*
      
*/
