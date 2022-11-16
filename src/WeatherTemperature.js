import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <li className="CurrentTemperature">
        {Math.round(props.celsius)}°<span className="units"> C</span>
      </li>
    </span>
  );
}
