import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar"
import SubmitEventForm from '../../components/SubmitEventForm/SubmitEventForm';
import "./DashBoardPage.css";
import SlideBar from '../../components/SlideBar/SlideBar';
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget';

const DashBoardPage = () => {
    
    
    
    return (
    <div>
        <NavBar/>
        <div className='dash-page-container'>
            <div className='dash-page-content'>
                <SlideBar/>
                <WeatherWidget/>
            </div>
        </div>
    </div> 
               

     );
}
 
export default DashBoardPage;