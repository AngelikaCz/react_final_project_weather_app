import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <li className="CurrentTemperature">
          {Math.round(props.celsius)}°
          <span className="units">
            {" "}
            CI
            <a href="/" className="link" onClick={showFahrenheit}>
              F
            </a>
          </span>
        </li>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <li className="CurrentTemperature">
          {Math.round(fahrenheit)}°
          <span className="units">
            {" "}
            <a href="/" className="link" onClick={showCelsius}>
              C
            </a>
            I F
          </span>
        </li>
      </span>
    );
  }
}
