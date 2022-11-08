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

  return (
    <div className="ForecastContainer">
      <ul className="NextDay" id="NextDay">
        <li className="Day">{day()}</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="{props.data.description}"
          ></img>
        </li>
        <li>{forecastTemperature()}</li>
      </ul>
      <ul className="NextDay" id="NextDay">
        <li className="Day">Tue</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
          ></img>
        </li>
        <li>12°</li>
      </ul>
      <ul className="NextDay" id="NextDay">
        <li className="Day">Wed</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
          ></img>
        </li>
        <li>12°</li>
      </ul>
      <ul className="NextDay" id="NextDay">
        <li className="Day">Thu</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
          ></img>
        </li>
        <li>12°</li>
      </ul>
      <ul className="NextDay" id="NextDay">
        <li className="Day">Fri</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
          ></img>
        </li>
        <li>12°</li>
      </ul>
      <ul className="NextDay" id="NextDay">
        <li className="Day">Sat</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
          ></img>
        </li>
        <li>12°</li>
      </ul>{" "}
    </div>
  );
}
