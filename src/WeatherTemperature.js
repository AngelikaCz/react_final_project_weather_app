import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  if (unit === "celsius") {
    return (
      <span>
        <li className="CurrentTemperature">
          {Math.round(props.celsius)}°<span className="units"> C</span>
        </li>
      </span>
    );
  } else {
    return (
      <span>
        <li className="CurrentTemperature">
          {Math.round(props.celsius)}°<span className="units"> C</span>
        </li>
      </span>
    );
  }
}
