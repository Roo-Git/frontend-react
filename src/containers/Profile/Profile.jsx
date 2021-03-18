import React,{useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import axios from 'axios';


import './Profile.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from  '../../components/Button/Button';


const Profile = (props) => {

  // let history = useHistory();

  // const [appointment, setAppointment]  = useState({
  //   appointment: []
  // });

  // const getAppointments = async()=>{
  //     let result = await axios.get( `http://localhost:3001/customers/${props.customer.customer.id}/appointments/`, { headers: {"Authorization" : `Bearer ${props.customer.customer.token}`} });
  //     console.log(result.data)

  // }

  // useEffect(()=>{
  //   getAppointments();

  // },[])
  if(props.customer?.jwt?.customer) {
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
            {props.customer?.jwt?.customer.firstName}
          </div>
          <div>
            {props.customer?.jwt?.customer.lastName}
          </div>
          <div>
            {props.customer?.jwt?.customer.email}
          </div>
          <div>
            {props.customer?.jwt?.customer.phoneNumber}
          </div>
          <div>
            {props.customer?.jwt?.customer.address}
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
      </div>
    )
  }

};

const mapStateToProps = state => {
  return {
      customer : state.customerReducer.customer
  }
};

export default connect(mapStateToProps)(Profile)
