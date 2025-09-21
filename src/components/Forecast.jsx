import React from "react";

export default function Forecast({ weather }) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednes", "Thursday", "Friday", "Saturday"];

  return (
    <table className="forecast bg-linear-to-r/srgb from-indigo-600 to-teal-600">
      <thead>
        <tr>
          <th className="title bg-black text-center mb-1.5 rounded-tl-2xl w-[100%]" colSpan={5}>
            Forecast 7 Day Weather
          </th>
        </tr>
      </thead>
      <tbody>
        {weather.forecast.forecastday.map((day, index) => {
          const date = new Date(day.date);
          const weekday = index===0?"Today":days[date.getDay()];

          return (
            <tr key={index}>
              <td className="day">{weekday}</td>
              <td className="opacity-70">{day.day.avghumidity}%</td>
              <td>
                <img src={day.day.condition.icon} alt="weather icon" />
              </td>
              <td>
                {day.day.maxtemp_c}
                <sup>°</sup>
              </td>
              <td>
                {day.day.mintemp_c}
                <sup>°</sup>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
