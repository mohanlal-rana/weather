import { useEffect, useState } from "react";

import "./App.css";
import Forecast from "./components/Forecast";
import CurrentDetails from "./components/CurrentDetails";
import Search from "./components/Search";
import Time from "./components/Time";
import getData from "./getData";
import Current from "./components/Current";
// import Current from "./components/Current";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("dhangadhi");

  useEffect(() => {
    getData(city, setWeather);
  }, [city]);

  console.log(weather);

  const handleSearch = (value) => {
    if (value.trim()) {
      setCity(value);
    }
  };
  const refresh = (name) => {
    setCity(name);
  };
  return (
    <>
      <section className="bg-linear-to-r/srgb from-indigo-600 to-teal-600 hero ">
        <h1 className="title app-name" onClick={() => refresh("dhangadhi")}>
          Weather App
        </h1>

        {weather ? (
          weather.error ? (
            <>
              <div className="current bg-linear-to-r/srgb from-indigo-600 to-teal-600">
                <p className="error">⚠️ {weather.error.message}</p>
              </div>
            </>
          ) : (
            <div className="main">
              <div className="current bg-linear-to-r/srgb from-indigo-600 to-teal-600 ">
                <div>
                  <div className="head">
                    <p className="location">
                      {weather.location.name},{weather.location.country}
                    </p>
                    <Search onSearch={handleSearch} />
                  </div>

                  <h1
                    className="title"
                    onClick={() => refresh(weather.location.name)}
                  >
                    Current Weather
                  </h1>
                  <Time />
                  <div className="info">
                    <img
                      src={weather.current.condition.icon}
                      alt="Weather Icon"
                    />
                    <span className="temp">
                      {weather.current.temp_c}
                      <sup>°C</sup>
                    </span>
                    <div>
                      <span className="text">
                        {weather.current.condition.text}
                      </span>
                      <p>
                        Feels like <span>{weather.current.feelslike_c}</span>
                        <sup>°</sup>
                      </p>
                    </div>
                  </div>
                  {/* <Current weather={weather}/> */}
                  <div>
                    <CurrentDetails weather={weather} />
                  </div>
                </div>
              </div>
              {/* <Current/> */}
              {/* <Current weather={weather} handleSearch={handleSearch}/> */}
              <Forecast id={crypto.randomUUID()} weather={weather} />
            </div>
          )
        ) : (
          <p>Loading weather data...</p>
        )}
      </section>
    </>
  );
}

export default App;
