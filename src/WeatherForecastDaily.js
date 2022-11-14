import React from "react";
import "./WeatherForecastDaily.css";

export default function WeatherForecastDaily(props) {
  function forecastTemperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function iconUrl() {
    let URL = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return `${URL}`;
  }

  return (
    <div>
      <ul className="NextDay" id="NextDay">
        <li className="Day">{day()}</li>
        <li>
          {" "}
          <img src={iconUrl()} alt={props.data.weather[0].description}></img>
        </li>
        <li>{forecastTemperature()}</li>
      </ul>
    </div>
  );
}
