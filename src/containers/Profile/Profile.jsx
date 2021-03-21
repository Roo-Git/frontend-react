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

import leaderboardOne from '../../assets/Images/leaderboardOne.jpeg';
import leaderboardTwo from '../../assets/Images/leaderboardTwo.jpeg';
import leaderboardThree from '../../assets/Images/leaderboardThree.jpeg';


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
    dentistId : 1,
    appointment : []
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
  
  if(props.customer?.id) {
    console.log("estoy dento del primer if y fel if")
    return (
      <div className="masterProfile">
        <div className="containerHeader">

            <img  src={leaderboardOne}/>
            <img  src={leaderboardTwo}/>
            <img  src={leaderboardThree}/>

        </div>

        <div className="navbar">
          <div className="containerGoToHome"><Button name="Home" destiny='home'/></div>
          <div className="logoutContainer"><Submit type="submit" name="Salir" title="Logout" onClick={() => logOut()}/></div>
        </div>
       
        <div className="containerProfile">

          <div className="masterFormProfile">
            <div className="tituloProfile">Perfil</div>
            <div className="perfilForm">
              <div className="parrafoCitaPerfil">
                Nombre: {props.customer?.firstName} {props.customer?.lastName}
              </div>
              <div className="parrafoCitaPerfil">
                Email: {props.customer?.email}
              </div>
              <div className="parrafoCitaPerfil">
                Teléfono: {props.customer?.phoneNumber}
              </div>
               <div className="parrafoCitaPerfil">
                Calle: {props.customer?.address}
              </div>
            </div>
          </div>


          <div className="masterPedirCitaProfile">
            <div className="tituloPedirCitaProfile">Pide una cita</div>
            <div className="pedirCitaProfile">
              <div className="appointmentContainer"><Input type="datetime-local" name="dentalAppointment" onChange={handleState}/></div>
              <div className="sendAppointmentContainer"><Submit type="submit" name="Salir" title="Crear cita" onClick={() => createAppointments()}/></div>
            </div>
            </div>

          <div className="masterTusCitasProfile">
            <div className="tituloTusCitasProfile">Tu Cita</div>
            <div className="perfilTusCitasForm">
              <div className="parrafoCitaTusCitas">
                 {props.appointment?.dentalAppointment}
              </div>
            </div>
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


