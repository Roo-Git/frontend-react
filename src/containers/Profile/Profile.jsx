import React,{useEffect} from "react";
import {useHistory} from 'react-router-dom';

// import axios from 'axios';


import './Profile.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const Profile = (props) => {

  let history = useHistory();

  // const getAppointments = async()=>{
  //     let result = await axios.get( `http://localhost:3001/customers/${props.customer.customer.id}/appointments/`, { headers: {"Authorization" : `Bearer ${props.customer.customer.token}`} });
  //     console.log(result.data)

  // }

  // useEffect(()=>{
  //   getAppointments();

  // },[])

  return (
    <div className="mainContainer">
      <Header/>
      <Navbar/>
      <div className="spaceUnderHead"></div>
      <div className="welcomeMessage">
        <h1>Bienvenido a Doc. La Muela</h1>
      </div>
      <div className="spaceProfileContainer"></div>
    <Footer/>
    </div>
  )
};

export default Profile

