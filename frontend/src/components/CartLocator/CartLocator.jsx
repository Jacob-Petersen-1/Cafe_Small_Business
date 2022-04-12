import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CartLocator.css";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const CartLocator = () => {
 const[marker,setMarker] = useState([])
//  const[data, setData] = useState([])
  
  useEffect(() => {
        
    const fetchMarker = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/map/marker/"); //Data from Database unprotected
            let formatMarker = response.data.map((m) => {
              return {lat: parseInt(m.lat), lng : parseInt(m.lng)}
            });
            setMarker(formatMarker);

          } catch (error) {
            console.log(error.message);
          }
        };
        fetchMarker();
        console.log(marker)   
      }, []);
      
      
    let key = process.env.REACT_APP_API_KEY
    
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
    
      const center = {
        lat: 39.5250,
        lng: -111.5905
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
          <Marker
          position={{lat:39.524963, lng:-111.5905}} 
          >
          </Marker>
        </GoogleMap>
        </LoadScript>
    </div>
     
     
  );
};

export default CartLocator;
