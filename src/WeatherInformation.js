import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformation(props) {
  return (
    <div className="WeatherInformation">
      <h1>{props.data.city}</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="container">
        <div id="TodayForecast">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="TodayIcon"
          ></img>
          <ul className="Temperature">
            <WeatherTemperature celsius={props.data.temperature} />
            <li>{props.data.description.toUpperCase()}</li>
          </ul>
        </div>
        <div id="TodayParameters" className="Parameters">
          <ul className="WindHumid">
            <li className="ParametersData">{props.data.wind}mph</li>
            <li>Wind</li>
            <br />
            <li className="ParametersData">{props.data.humidity}%</li>
            <li>Humidity</li>
          </ul>
          <ul className="MinMax">
            <li className="ParametersData">{props.data.mintemp}°</li>
            <li>Min temp</li>
            <br />
            <li className="ParametersData">{props.data.maxtemp}°</li>
            <li>Max temp</li>
          </ul>
        </div>
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
        </ul>
      </div>
    </div>
  );
}
