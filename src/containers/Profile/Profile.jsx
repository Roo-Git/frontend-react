import React,{useEffect} from "react";
import {connect} from 'react-redux';

import axios from 'axios';

// RDX
import { SHOW } from '../../redux/Types/appointmentType'

import './Profile.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from  '../../components/Button/Button';


const Profile = (props) => {

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
      <div className="mainContainer">
        <Header/>
        <Navbar/>
        <div className="spaceUnderHead"></div>
        <div className="welcomeMessage">
          <h1>Bienvenido a Doc. La Muela</h1>
        </div>
        <div className="spaceProfileContainer">
          <div>
            {props.customer?.firstName}
          </div>
          <div>
            {props.customer?.lastName}
          </div>
          <div>
            {props.customer?.email}
          </div>
          <div>
            {props.customer?.phoneNumber}
          </div>
          <div>
            {props.customer?.address}
          </div>
        </div>
      <Footer/>
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
