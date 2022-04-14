import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar"
import SubmitEventForm from '../../components/SubmitEventForm/SubmitEventForm';
import "./DashBoardPage.css";
import SlideBar from '../../components/SlideBar/SlideBar';

const DashBoardPage = () => {
    
    
    
    return (
    <div>
        <NavBar/>
        <SlideBar/>
        <div className='dash-page-container'>
            <div className='dash-page-content'>

                Content
            </div>
        </div>
    </div> 
     );
}
 
export default DashBoardPage;