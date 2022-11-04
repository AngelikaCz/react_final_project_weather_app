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
          ></img>
          <ul>
            <li>21°</li>
            <li>Partly sunny</li>
          </ul>
        </div>
        <div id="TodayParameters">
          <ul>
            <li>7mph</li>
            <li>Wind</li>
            <li>30%</li>
            <li>Humidity</li>
          </ul>
          <ul>
            <li>05:27</li>
            <li>Sunrise</li>
            <li>20:57</li>
            <li>Sunset</li>
          </ul>
        </div>
        <h3 id="Forecast">Forecast for next days</h3>
        <ul>
          <li>Monday</li>
          <li>
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="cloudy icon"
            ></img>
          </li>
          <li>12°</li>
        </ul>
        <ul>
          <li>Tuesday</li>
          <li>
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="cloudy icon"
            ></img>
          </li>
          <li>12°</li>
        </ul>
        <ul>
          <li>Wednesday</li>
          <li>
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="cloudy icon"
            ></img>
          </li>
          <li>12°</li>
        </ul>
        <ul>
          <li>Thursday</li>
          <li>
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="cloudy icon"
            ></img>
          </li>
          <li>12°</li>
        </ul>
        <ul>
          <li>Friday</li>
          <li>
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="cloudy icon"
            ></img>
          </li>
          <li>12°</li>
        </ul>
        <ul>
          <li>Saturday</li>
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
