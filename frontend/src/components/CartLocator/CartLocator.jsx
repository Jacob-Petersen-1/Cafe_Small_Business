import React, { useState } from "react";
import axios from "axios";
import "./CartLocator.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const CartLocator = () => {
    
    let key = process.env.REACT_APP_API_KEY
    
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
    
      const center = {
        lat: -3.745,
        lng: -38.523
      };

  return (
    <div>
        <LoadScript
        googleMapsApiKey="AIzaSyA17-gHcEaqf8lDMELiT5T6dZ22G7rGorY"
        >
        <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        >
        </GoogleMap>
        </LoadScript>
    </div>
     
     
  );
};

export default CartLocator;
