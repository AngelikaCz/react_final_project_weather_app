import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      {" "}
      <form>
        <input
          type="text"
          placeholder="Enter your city..."
          className="FormInput"
        ></input>
        <input type="submit" value="Search" className="FormSubmit"></input>
      </form>
      <h1>Paris</h1>
      <h2>Sunday, 27 August, 12:00</h2>
      <div className="container">
        <div id="TodayForecast">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="cloudy icon"
            className="TodayIcon"
          ></img>
          <ul className="Temperature">
            <li className="CurrentTemperature">21°C</li>
            <li>Partly sunny</li>
          </ul>
        </div>
        <div id="TodayParameters" className="Parameters">
          <ul className="WindHumid">
            <li className="ParametersData">7mph</li>
            <li>Wind</li>
            <br />
            <li className="ParametersData">30%</li>
            <li>Humidity</li>
          </ul>
          <ul className="SunHours">
            <li className="ParametersData">05:27</li>
            <li>Sunrise</li>
            <br />
            <li className="ParametersData">20:57</li>
            <li>Sunset</li>
          </ul>
        </div>
        <h3 id="Forecast">Forecast for next days</h3>
        <ul className="NextDay">
          <li className="Day">Monday</li>
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
        </ul>
      </div>
    </div>
  );
}
