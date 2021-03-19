import React, {useState} from 'react';
import axios from 'axios';
import {CREATE} from '../../redux/Types/appointmentType';
import moment from 'moment';
import {connect} from 'react-redux';


import './Appointment.css';
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';

const Appointment = (props) => {


  const [dataAppointment, setAppointment] = useState ({
    dentalAppointment : '',
    dentistId : ''
  });

  const handleState = (event) => {
    setAppointment({...dataAppointment, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
  };

  const createAppointment = async() => {

    let body = {

      dentalAppointment : props.dental,
      dentistId : 1
  
    };

    console.log(dataAppointment)
    let result = await axios.post(`http://localhost:3000/appointments/`,
    body,
    {
       headers: {"Authorization" : `Bearer ${props.custom?.token}`}
    });

      props.dispatch({type: CREATE, payload: result.data});
      console.log(result.data);
  };

  return (
    <div>
      <Input type="datetime-local" name="dentalAppointment" onChange={handleState}/>
      <Submit type="submit" name="date" title="fecha" onClick={() => createAppointment()}/>
    </div>
  )

}

const mapStateToProps = state =>{
  
  return{
    customer: state.customerReducer.customer
  }
};

export default connect(mapStateToProps)(Appointment);
 