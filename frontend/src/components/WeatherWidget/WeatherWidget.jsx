import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherWidget.css";
import "bootswatch/dist/sandstone/bootstrap.min.css";


const WeatherWidget = () => {
 const [weather, setWeather] = useState([]);

 let KEY = process.env.REACT_APP_API_KEY_WEATHER;

 useEffect(() => {
   const fetchData = async () => {
     try{
      let response = await axios.get("http://127.0.0.1:8000/map/marker/");
      const latitude = parseFloat(response.data[0].lat);
      const longitude = parseFloat(response.data[0].lng);
      let weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=imperial`);
       return setWeather(weatherResponse.data);
     } catch (error){
       console.log(error.message);
     };
   };
   fetchData();
   console.log("weather: ", weather);
 }, []);

 
 
 
 
 
 
 
 

   
 return (
    <div>
      <div class="card mb-3">
        <h3 class="card-header">Weather</h3>
        <div class="card-body">
          <h5 class="card-title">Weather For Marker Location:</h5>
        </div>
           Update the location of the marker on the map to get weather for that location 
        <ul class="list-group list-group-flush">
          <li class="list-group-item">City: {weather.name}</li>
          <li class="list-group-item">Temperature: {weather.main.temp} &deg;F</li>
          <li class="list-group-item">Feels Like: {weather.main.feels_like} &deg;F</li>
          <li class="list-group-item">Temperature Highs: {weather.main.temp_max} &deg;F</li>
          <li class="list-group-item">Temperature Lows: {weather.main.temp_min} &deg;F</li>
          <li class="list-group-item">Wind: {weather.wind.speed} MPH</li>
          <li class="list-group-item">Wind Gust: {weather.wind.gust} MPH</li>
          <li class="list-group-item">Humidity: {weather.main.humidity}%</li>
          <li class="list-group-item">Description: {weather.weather[0].main}</li>
        </ul>
        <div class="card-footer text-muted">Today</div>
      </div>
    </div>
    
 


  );
};

export default WeatherWidget;
