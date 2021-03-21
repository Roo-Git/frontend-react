import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {SHOW} from '../../redux/Types/appointmentType';
import Submit from '../../components/Submit/Submit';
import {connect} from 'react-redux';
import './Admin.css';


const Admin = (props) => {


  const [appointment, setAppointment] = useState ({
    dentalAppointment : [],
    dentistId : ''
  });

  const [users, setUsers] = useState({
    listUsers : []
  })

  const getUsers = async () => {

    let result = await axios.get(`http://localhost:3000/customers`)
    console.log(result.data)

    setUsers({
      ...users,listUsers: result.data
    })
  };

  useEffect(() => {
   
    getUsers()
  }, [])

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
