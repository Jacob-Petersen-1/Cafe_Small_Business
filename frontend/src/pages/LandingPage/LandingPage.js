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
        <div className="column">
            <h1>Cart Locator</h1>
            <CartLocator />
        </div>
        <div className="column">
            <h1>Center</h1>
        </div>
        <div className="column">
            <h1>Right</h1>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
