import React, { useState } from "react";
import axios from "axios";

import "./styles.css";
import WeatherIcon from "./WeatherIcon";

export default function Searchbar() {
  const [city, setCity] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  function getCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    let temp = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;

    setWeatherInfo(
      <ul>
        <li> Temperature: {temp} °C</li>
        <li> Description: {description}</li>
        <li> Humidity: {humidity}%</li>
        <li> Wind: {wind}km/h</li>
        <li>
          <WeatherIcon icon={response} />
        </li>
      </ul>
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    const ownApiKey = "33d1903aae9a8dd9cb119a9d70a09d9d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ownApiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  return (
    <div className="SearchBar">
      <form>
        <input type="search" placeholder="Enter a city" onChange={getCity} />
        <input type="submit" value="Search" onClick={handleSubmit} />
      </form>
      {weatherInfo}
    </div>
  );
}
