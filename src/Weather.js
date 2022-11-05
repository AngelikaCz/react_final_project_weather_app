import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      mintemp: Math.round(response.data.main.temp_min),
      maxtemp: Math.round(response.data.main.temp_max),
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (ready) {
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
        <h2>
          <FormattedDate date={weatherData.date} />
        </h2>
        <div className="container">
          <div id="TodayForecast">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="cloudy icon"
              className="TodayIcon"
            ></img>
            <ul className="Temperature">
              <li className="CurrentTemperature">
                {weatherData.temperature}°C
              </li>
              <li>{weatherData.description.toUpperCase()}</li>
            </ul>
          </div>
          <div id="TodayParameters" className="Parameters">
            <ul className="WindHumid">
              <li className="ParametersData">{weatherData.wind}mph</li>
              <li>Wind</li>
              <br />
              <li className="ParametersData">{weatherData.humidity}%</li>
              <li>Humidity</li>
            </ul>
            <ul className="MinMax">
              <li className="ParametersData">{weatherData.mintemp}°</li>
              <li>Min temp</li>
              <br />
              <li className="ParametersData">{weatherData.maxtemp}°</li>
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
                alt={weatherData.description}
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
  } else {
    let city = "London";
    let ApiKey = "dee9a420d2a7b5a314d3260f8ca83eea";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
    return "Loading...";
  }
}
