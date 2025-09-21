import React from 'react'

export default function getData(city,setWeather) {
      fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=5a3feaa965344eda9a233630251405&q=${city}&days=7`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
}
