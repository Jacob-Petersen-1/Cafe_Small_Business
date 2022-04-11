import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar"
import SubmitEventForm from '../../components/SubmitEventForm/SubmitEventForm';
import "./DashBoardPage.css"

const DashBoardPage = () => {
    
    
    
    return ( 
        <div className="container-page">
            <NavBar/>
            <h1>DashBoard</h1>
            <SubmitEventForm/>

        </div>

     );
}
 
export default DashBoardPage;