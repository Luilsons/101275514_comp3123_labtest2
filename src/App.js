import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchWeather } from "./services/weatherService";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [city, setCity] = useState("Toronto"); 
  const [weatherData, setWeatherData] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather(city);
      setWeatherData(data);

      
      setWeeklyForecast([
        { day: "Mon", temp: 27, condition: "Sunny" },
        { day: "Tue", temp: 23, condition: "Cloudy" },
        { day: "Wed", temp: 25, condition: "Rainy" },
        { day: "Thu", temp: 30, condition: "Sunny" },
        { day: "Fri", temp: 28, condition: "Windy" },
        { day: "Sat", temp: 26, condition: "Mist" },
      ]);
    };
    getWeather();
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="app">
      <h1 className="title-color">Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && (
        <WeatherDisplay weatherData={weatherData} weeklyForecast={weeklyForecast} />
      )}
      {
        !weatherData &&
        <div>
          <h2 style={{ color: 'red'}}>Invalid City</h2>
       </div>
      }
    </div>
  );
}

export default App;
