import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'

import './Profile.css'

const Profile = () => {
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
