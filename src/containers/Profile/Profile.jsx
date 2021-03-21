import React,{useEffect, useState} from "react";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { LOGOUT } from '../../redux/Types/customerType.js';

import axios from 'axios';

// RDX
import { SHOW, CREATE } from '../../redux/Types/appointmentType'

import './Profile.css'
import Submit from '../../components/Submit/Submit';
import Button from  '../../components/Button/Button';
import Input from "../../components/Input/Input.jsx";


const Profile = (props) => {

  let history = useHistory();

  const logOut =  () => {

    props.dispatch({ type: LOGOUT, payload : {}});

    setTimeout(()=> {
        history.push('/Home');
    },300);
  };

  const [dataAppointment, setAppointment] = useState ({
    dentalAppointment : '',
    dentistId : 1
  });

  const handleState = (event) => {
    setAppointment({...dataAppointment, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };

  const getAppointments = async () => {

    let body = {

      dentalAppointment : dataAppointment.dentalAppointment,
      dentistId : 1
  
    };

    console.log(dataAppointment)

    let result = await axios.post(`http://localhost:3000/appointments/`,
    body,
    {
       headers: {"Authorization" : `Bearer ${props.custom?.token}`}
    });
      props.dispatch({type: CREATE, payload: result.data});
      console.log(result.data)
  }

  useEffect(()=>{

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
                  Citas: {props.appointment?.dentalAppointment}
              </div>
            </div>
          </div>
          <div className="masterAccionesProfile">
            <div className="tituloAccionesProfile">Acciones</div>
            <div className="accionesProfile"></div>
            <div className="botonSinPintarPedirCita">METER AQUI
            <Input type="datetime-local" name="dentalAppointment" onChange={handleState}/>
            <Submit type="submit" name="Salir" title="Crear cita" onClick={() => getAppointments()}/>
            </div>
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
