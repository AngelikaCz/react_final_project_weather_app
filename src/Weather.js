import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      mintemp: Math.round(response.data.main.temp_min),
      maxtemp: Math.round(response.data.main.temp_max),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const ApiKey = "8ca7dd4e61360b90fb66918853670e48";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Weather">
        {" "}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your city..."
            className="FormInput"
            onChange={handleCityChange}
          ></input>
          <input type="submit" value="Search" className="FormSubmit"></input>
        </form>
        <WeatherInformation data={weatherData} />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          data={weatherData}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
