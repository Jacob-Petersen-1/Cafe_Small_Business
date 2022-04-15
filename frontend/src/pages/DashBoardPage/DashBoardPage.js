import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar/NavBar"
import SubmitEventForm from '../../components/SubmitEventForm/SubmitEventForm';
import "./DashBoardPage.css";
import SlideBar from '../../components/SlideBar/SlideBar';
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget';
import MarkerForm from '../../components/MarkerForm/MarkerForm';
import axios from 'axios';

const DashBoardPage = () => {

    
    return (
    <div>
        <NavBar/>
        <div className='dash-page-container'>
            <div className='dash-page-content'>
                <div className='dash-sidebar'>
                    <SlideBar/>
                </div>
                <div className='item-1'>
                    <WeatherWidget/>
                </div>
                <div className='item-2'>
                    <MarkerForm/>
                </div>
                
            </div>
        </div>
    </div> 
               

     );
}
 
export default DashBoardPage;