import React, { useState } from 'react';
import './WeatherApp.css';
import searchIcon from '../Assets/search.png';
import clearIcon from '../Assets/clear.png';
import cloudIcon from '../Assets/cloud.png';
import rainIcon from '../Assets/rain.png';
import snowIcon from '../Assets/snow.png';
import windIcon from '../Assets/wind.png';
import humidityIcon from '../Assets/humidity.png';
import drizzleIcon from '../Assets/drizzle.png';

const WeatherApp = () => {
  // State for weather icon
  const [weatherIcon, setWeatherIcon] = useState(cloudIcon);
  
  // API key for OpenWeatherMap API
  const apiKey = "9e84d6830a71ef226c9f876d4a60ce6e";

  // Function to handle search and fetch weather data
  const search = async () => {
    // Retrieving the input element
    const cityInput = document.getElementsByClassName("cityInput")[0];

    // Checking if the city input is empty
    if (cityInput.value === "") {
      alert('Please enter a city name');
      return;
    }

    // Building the API url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=Metric&appid=${apiKey}`;
    
    // Fetching weather data
    const response = await fetch(url);
    const data = await response.json();

    // Retrieving HTML elements
    const humidity = document.getElementsByClassName("humidity-score")[0];
    const windSpeed = document.getElementsByClassName("Wind-Speed")[0];
    const temperature = document.getElementsByClassName("weather-temp")[0];
    const cityName = document.getElementsByClassName("weather-city")[0];

    // Updating HTML elements with weather data
    humidity.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${Math.floor(data.wind.speed)} km/hr`;
    temperature.innerHTML = `${Math.floor(data.main.temp)}°C`;
    cityName.innerHTML = data.name;

    // Setting the weather icon based on weather code
    setWeatherIcon(getWeatherIcon(data.weather[0].icon));
  };

  // Function to determine weather icon based on weather code
  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
      case "01n":
        return clearIcon;
      case "02d":
      case "02n":
        return cloudIcon;
      case "03d":
      case "03n":
        return drizzleIcon;
      case "04d":
      case "04n":
        return drizzleIcon;
      case "09d":
      case "09n":
        return rainIcon;
      case "10d":
      case "10n":
        return rainIcon;
      case "13d":
      case "13n":
        return snowIcon;
      default:
        return clearIcon;
    }
  };

  return (
    <div className="container">
      {/* Top bar with search input and icon */}
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon" onClick={search}>
          <img src={searchIcon} alt="" />
        </div>
      </div>
      
      {/* Weather image */}
      <div className="weather-image">
        <img src={weatherIcon} alt="" />
      </div>
      
      {/* Temperature, city, and data container */}
      <div className="weather-temp">24°C</div>
      <div className="weather-city">Accra</div>
      <div className="data-container">
        {/* Humidity data */}
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-score">65%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        
        {/* Wind speed data */}
        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="Wind-Speed">20 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
