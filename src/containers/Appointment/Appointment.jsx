import React, {useState} from 'react';
import axios from 'axios';
import {SHOW} from '../../redux/Types/appointmentType';
import moment from 'moment';
import {connect} from 'react-redux';


import './Appointment.css';
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';

const Appointment = (props) => {


  const [appointment, setAppointment] = useState ({
    dentalAppointment : [],
    dentistId : ''
  });

  const handleState = (event) => {
    setAppointment({...appointment, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };

  const getAppointments = async () => {

    let body = {

      dentalAppointment : appointment.dentalAppointment,
      customerId : appointment.customerId,
      dentistId : 1
    };

    let showAppointment = await axios.get(`http://localhost:3000/appointments/`,
    body,
    {
       headers: {"Authorization" : `Bearer ${props.custom?.token}`}
    });

    props.dispatch({type: SHOW, payload: showAppointment.data});
    setAppointment({
      ...appointment,
      dentalAppointment : showAppointment.data
    });

    console.log(showAppointment.data)
  };

  const pepe = (appointments) => {
    console.log("IEEEEEEEEEE")
  }
  console.log(appointment.dentalAppointment)

  if(appointment.dentalAppointment) {
    console.log(appointment.dentalAppointment)
    return (
      <div>
        <div>
          {appointment.dentalAppointment.map(appointments => {
            return (
              <div>
                <div>
                  Fecha de la cita: {appointments.dentalAppointment}
                </div>
              </div>
            )
          })}
        </div>
        <div>
          Hola que ase
          <Submit type="submit" name="date" title="mostrar fecha" onChange={() => getAppointments()}/>
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

export default connect(mapStateToProps)(Appointment);
 