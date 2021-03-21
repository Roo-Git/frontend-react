import React,{useEffect, useState} from "react";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {LOGOUT} from '../../redux/Types/customerType.js';

import axios from 'axios';

// RDX
import {CREATE} from '../../redux/Types/appointmentType'

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
    dentalAppointment : [],
    customerId : props.customer?.id,
    dentistId : 1
  });

  const handleState = (event) => {
    setAppointment({...dataAppointment, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };

  const createAppointments = async () => {

    let body = {

      dentalAppointment : dataAppointment.dentalAppointment,
      customerId : dataAppointment.customerId,
      dentistId : 1
    };

    let result = await axios.post(`http://localhost:3000/appointments/`,
    body,
    {
       headers: {"Authorization" : `Bearer ${props.custom?.token}`}
    });
    props.dispatch({type: CREATE, payload: result.data});
    
    console.log(result.data)
  }

  const pepe = (appointments) => {
    console.log("Hola que Ase???....")
  }

  useEffect(()=>{

  },[])
  console.log(dentalAppointment)
  if(props.customer?.id) {
    console.log("estoy dento del primer if y fel if")
    return (
      <div className="masterProfile">
        <div className="logoutContainer"><Submit type="submit" name="Salir" title="Logout" onClick={() => logOut()}/></div>
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
                Fecha de la cita: {props.appointments.dentalAppointment}
              </div>
            </div>
          <Submit type="submit" name="appointment" title="Crear cita" onClick={() => createAppointments()}/>
          <Input type="datetime-local" name="dentalAppointment" onChange={handleState}/>
          </div>
          <div className="masterAccionesProfile">
            <div className="tituloAccionesProfile">Acciones</div>
            <div className="accionesProfile"></div>
           
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


