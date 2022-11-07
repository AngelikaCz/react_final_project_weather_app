import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="ForecastContainer">
      <ul className="NextDay" id="NextDay">
        <li className="Day">Mon</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt={props.data.description}
          ></img>
        </li>
        <li>12°</li>
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
