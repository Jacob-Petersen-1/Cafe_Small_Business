import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherWidget.css";
import "bootswatch/dist/sandstone/bootstrap.min.css";

const WeatherWidget = (props) => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weather, setWeather] = useState([]);

  let KEY = process.env.REACT_APP_API_KEY_WEATHER;

  useEffect(() => {
    const fetchCord = async () => {
      try {
        let response = axios.get("http://127.0.0.1:8000/map/marker/"); //Data from Database unprotected
        let formatLat = response.data.map((m) => {
          return parseFloat(m.lat);
        });
        setLat(formatLat);
        let formatLon = response.data.map((m) => {
          return parseFloat(m.lng);
        });
        setLong(formatLon);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCord();
    const latitude = lat[0];
    const longitude = long[0];
    console.log("LAT: ", lat);
    console.log("LON: ", long);
    const fetchWeather = async () => {
      try {
        let weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=imperial`
        );
        return setWeather(weatherResponse.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchWeather();
    console.log("Weather: ", weather);
  }, []);


  

  return (
    // <div>
    //   <div class="card mb-3">
    //     <h3 class="card-header">Weather</h3>
    //     <div class="card-body">
    //       <h5 class="card-title">Weather For Marker Location:</h5>
    //     </div>
    //     <ul class="list-group list-group-flush">
    //       <li class="list-group-item">City: {weather.name}</li>
    //       <li class="list-group-item">Temperature: {weather.main.temp} &deg;F</li>
    //       <li class="list-group-item">Feels Like: {weather.main.feels_like} &deg;F</li>
    //       <li class="list-group-item">Temperature Highs: {weather.main.temp_max} &deg;F</li>
    //       <li class="list-group-item">Temperature Lows: {weather.main.temp_min} &deg;F</li>
    //       <li class="list-group-item">Wind: {weather.wind.speed} MPH</li>
    //       <li class="list-group-item">Wind Gust: {weather.wind.gust} MPH</li>
    //       <li class="list-group-item">Humidity: {weather.main.humidity}%</li>
    //       <li class="list-group-item">Description: {weather.weather[0].main}</li>
    //     </ul>
    //     <div class="card-footer text-muted">Today</div>
    //   </div>
    // </div>

    <div>Hello</div>
  );
};

export default WeatherWidget;
