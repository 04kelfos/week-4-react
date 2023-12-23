import React, { useState } from "react";

export default function WeatherIcon(response) {
  let icon = response.icon.data.weather[0].icon;
  console.log(response.icon.data.weather[0].icon);
  return (
    <img alt="weather-icon" src="https://openweathermap.org/img/wn/01d.png" />
  );
}
