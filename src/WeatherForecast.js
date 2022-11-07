import React from "react";
import "./Weather.css";

export default function WeatherForecast(props) {
  return (
    <div>
      <h3 id="Forecast">Forecast for next days</h3>
      <ul className="NextDay">
        <li className="Day">Monday</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt={props.data.description}
          ></img>
        </li>
        <li>12°</li>
      </ul>
      <ul className="NextDay">
        <li className="Day">Tuesday</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
          ></img>
        </li>
        <li>12°</li>
      </ul>
      <ul className="NextDay">
        <li className="Day">Wednesday</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
          ></img>
        </li>
        <li>12°</li>
      </ul>
      <ul className="NextDay">
        <li className="Day">Thursday</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
          ></img>
        </li>
        <li>12°</li>
      </ul>
      <ul className="NextDay">
        <li className="Day">Friday</li>
        <li>
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
          ></img>
        </li>
        <li>12°</li>
      </ul>
      <ul className="NextDay">
        <li className="Day">Saturday</li>
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
