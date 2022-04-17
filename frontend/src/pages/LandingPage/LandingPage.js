import React, { useState, useEffect } from "react";
import BackGroundVideo from "../../components/BackGroundVideo/BackGroundVideo";
import SideNavigationBar from "../../components/SideNavigationBar/SideNavigationBar";
import About from "../../components/About/About";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <SideNavigationBar/>
      <div className="landing-container">
        <BackGroundVideo/>
        <About/>
    </div>
    </>


    

    
  
          


      
  

  );
};
export default LandingPage;
