import React from "react";

export default function Current(weather) {
  return (

      <div className="info">
        <img src={weather.current.condition.icon} alt="Weather Icon" />
        <span className="temp">
          {weather.current.temp_c}
          <sup>°C</sup>
        </span>
        <div>
          <span className="text">{weather.current.condition.text}</span>
          <p>
            Feels like <span>{weather.current.feelslike_c}</span>
            <sup>°</sup>
          </p>
        </div>
      </div>
      );
}
