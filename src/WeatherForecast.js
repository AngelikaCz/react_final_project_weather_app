import axios from "axios";
import React, { useState } from "react";
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
  let apiKEY = "8ca7dd4e61360b90fb66918853670e48";
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKEY}&units=metric`;

  axios.get(apiURL).then(handleResponse);

  return null;
}
