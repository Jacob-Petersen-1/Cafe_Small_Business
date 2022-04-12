import React, { useState } from "react";
import axios from "axios";
import "./CartLocator.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const CartLocator = () => {
    
    let key = 'AIzaSyCBUoH7IVPijpZkpZuwTdM2p8R42WC9Sl8'
    
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
        googleMapsApiKey={key}
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
