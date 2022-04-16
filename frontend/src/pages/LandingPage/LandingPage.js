import React, { useState, useEffect } from "react";
import SideNavigationBar from "../../components/SideNavigationBar/SideNavigationBar";
import CartLocator from "../../components/CartLocator/CartLocator";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
    <div className="landing-container">
      <div className="sidebar">
        <SideNavigationBar/>
      </div>
        <video src="./videos/Cafe.mp4" className="background" autoPlay loop muted/>
      <div className="locator">
      </div>
    </div>
    </>


    

    
  
          


      
  

  );
};
export default LandingPage;
