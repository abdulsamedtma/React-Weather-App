// import react, useState and other components
import React, { useState } from 'react'; // Import React
import './WeatherApp.css'; // Import WeatherApp.css
import search_icon from '../Assets/search.png'; // Import search_icon
import clear_icon from '../Assets/clear.png'; // Import clear_icon
import cloud_icon from '../Assets/cloud.png'; // Import cloud_icon
import rain_icon from '../Assets/rain.png'; // Import rain_icon 
import snow_icon from '../Assets/snow.png'; // Import snow_icon
import wind_icon from '../Assets/wind.png'; // Import wind_icon 
import humidity_icon from '../Assets/humidity.png'; // Import humidity_icon 
import drizzle_icon from '../Assets/drizzle.png'; // Import drizzle_icon    

// WeatherApp component
const WeatherApp = () => {
    let api_key ="9e84d6830a71ef226c9f876d4a60ce6e"; // API key

const[wicon, setWicon] = useState(cloud_icon); // Set weather icon 
// Create a Search functio
const search = async() => {
const element= document.getElementsByClassName("cityInput");
if (element[0].value === "") {
    alert('Please enter a city name'); // Alert user to enter a city name
    return 0;
}
// Create a url variable
let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`; // API url

let response = await fetch(url); // Fetch API url
let data = await response.json(); // Convert response data to json

// Create a variable to store weather data
const humidity = document.getElementsByClassName("humidity-score");
const wind = document.getElementsByClassName("Wind-Speed");
const temp = document.getElementsByClassName("weather-temp");
const city = document.getElementsByClassName("weather-city");


// Create a switch statement to display weather icons
humidity[0].innerHTML = data.main.humidity + "%"; // Display humidity data

wind[0].innerHTML = Math.floor (data.wind.speed) + "km/hr"; // Display wind speed data}

temp[0].innerHTML = Math.floor(data.main.temp) + "°C"; // Display temperature data

city[0].innerHTML = data.name; // Display city name

// Create a switch statement to display weather icons
if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") 
{
    setWicon(clear_icon); // Display clear icon
}
else if (data.weather[0].icon === "02d"||data.weather[0].icon === "02n")
{
    setWicon(cloud_icon); // Display cloud icon
}
else if (data.weather[0].icon === "03d"||data.weather[0].icon === "03n")    
{
    setWicon(drizzle_icon); // Display drizzle icon
}
else if (data.weather[0].icon === "04d"||data.weather[0].icon === "04n")
{ 
    setWicon(drizzle_icon); // Display drizzle icon
}
else if (data.weather[0].icon === "09d"||data.weather[0].icon === "09n")
{
    setWicon(rain_icon); // Display rain icon
}
else if (data.weather[0].icon === "10d"||data.weather[0].icon === "10n")
{
    setWicon(rain_icon); // Display rain icon
}
else if (data.weather[0].icon === "13d"||data.weather[0].icon === "13n")
{   
    setWicon(snow_icon); // Display snow icon
}
else{
    setWicon(clear_icon); // Display clear icon
}
}


    return(
<div className="container">
    <div className="top-bar">
        <input type="text" className="cityInput"  placeholder="search"/>
   <div className="search-icon"  onClick= {()=>(search())}>
         <img src={search_icon} alt=""/>
         </div>
    </div>
    <div className="weather-image">
        <img src={wicon} alt=""/>  
        </div>
    <div className="weather-temp">24°C</div>
    <div className="weather-city">Accra</div>
    <div className="data-container">
        <div className="element">
            <img src={humidity_icon}alt="" className="icon"/>
<div className="data">
    <div className="humidity-score">65%C</div>
    <div className="text"> Humidity </div>
</div>
</div>
<div className="element">
            <img src={wind_icon}alt="" className="icon"/>
<div className="data">
    <div className="Wind-Speed">20 km/hr</div>
    <div className="text"> Wind Speed</div> 
</div>
</div>
</div>
</div>

    )
}



export default WeatherApp; // Export WeatherApp component