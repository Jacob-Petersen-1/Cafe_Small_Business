import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "../../components/Calendar/Calendar";
import NaviBar from "../../components/NaviBar/NaviBar";
import CartLocator from "../../components/CartLocator/CartLocator";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-top">
        <NaviBar />
      </div>
      <div className="landing-body">
        <div className="sidebar">
            <h1>Cart Locator</h1>
            <CartLocator />
        </div>
        <div className="picture-body">
            <h1>Photo</h1>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
