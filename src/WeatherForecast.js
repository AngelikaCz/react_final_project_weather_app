import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return <WeatherForecastDaily data={forecast[0]} />;
  } else {
  }
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKEY = "dee9a420d2a7b5a314d3260f8ca83eea";
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKEY}&units=metric`;

  axios.get(apiURL).then(handleResponse);

  return null;
}
