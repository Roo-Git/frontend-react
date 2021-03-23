import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {SHOW} from '../../redux/Types/appointmentType';
import Submit from '../../components/Submit/Submit';
import {connect} from 'react-redux';
import Input from '../../components/Input/Input';

import './Admin.css';


const Admin = (props) => {


  const [appointment, setAppointment] = useState ({
    dentalAppointment : [],
    dentistId : ''
  });

  const [users, setUsers] = useState({
    listUsers : []
  });

  const [dentistLogin, setDentistLogin] = useState ({
    password : ''
  })

  const handleState = (event) => {
    setDentistLogin({...dentistLogin, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };

  const getUsers = async () => {

    let result = await axios.get(`http://localhost:3000/customers`)
    
    setUsers({
      ...users,listUsers: result.data
    })
  };
  
  useEffect(() => {
    
    getUsers()
  }, [])
  
  const checkPassword = async () => {
    let body = {
      password : ''
    }
    let result = await axios.post('http://localhost:3000/dentists/login', body);
    
    setDentistLogin ({
      ...dentistLogin, setDentistLogin: result.data
    })
    console.log(result.data)
  }

  const getAppointments = async () => {

    let body = {

      dentalAppointment : appointment.dentalAppointment,
      customerId : appointment.customerId,
      dentistId : 1
    };

    let showAppointment = await axios.get(`http://localhost:3000/appointments/`,
    body)
   
    console.log(showAppointment)
    props.dispatch({type: SHOW, payload: showAppointment.data})
    setAppointment({
      ...appointment,
      dentalAppointment : showAppointment.data
    })

  }

  if(appointment.dentalAppointment) {
    return (
      <div className="container">
        <div className="masterForm">
          <div className="tituloLogin">Iniciar Sesión</div>
          <div className="loginForm">
            <div className="loginFormA">
              
              <div className="labelEmailLogin">NOMBRE</div>
              <div className="inputLoginContainer">
                <Input type="text" name="email" onChange={handleState}/>
              </div>
              <div className="labelPwLogin">PASSWORD</div>
              <div className="inputLoginContainer">
                <Input type="password" name="password" onChange={handleState}/>
              </div>
              <div className="containerSendLogin">
                <Submit title="Enviar" onClick={() => checkPassword()}/>
              </div>
            </div>  
          </div>
        </div>
        <div>
          {appointment.dentalAppointment.map(appointments => {
            return (
              <div key={appointments.id}>
                <div>
                  Fecha de la cita: {appointments.dentalAppointment}
                  Paciente: {
                    users.listUsers.map(paciente => {
                      if(paciente.id === appointments.customerId) {
                        return(
                          paciente.firstName + ' ' + paciente.lastName
                        )
                      }
                    } )
                  }
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <Submit className="fechas" type="submit" name="date" title="mostrar fecha" onClick={() => getAppointments()}/>
        </div>
      </div>
    )
  }else {
    return (
      <div>
        No hay citas pendejo!!!!
      </div>
    )
  };

}

const mapStateToProps = state =>{
  
  return{
    customer: state.customerReducer.customer,
    appointment: state.appointmentReducer.appointment
  }
};


export default connect(mapStateToProps)(Admin);
