import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ weatherData, weeklyForecast }) => {
  if (!weatherData) return null;

  const { name } = weatherData; // City name
    const { temp, temp_min, temp_max, humidity } = weatherData.main; // Weather main data
    const { description } = weatherData.weather[0]; // Weather description
    const { speed } = weatherData.wind; // Wind speed
    const { icon } = weatherData.weather[0]

    // Convert Kelvin to Celsius
    const tempCelsius = (temp - 273.15).toFixed(1);
    const tempMinCelsius = (temp_min - 273.15).toFixed(1);
    const tempMaxCelsius = (temp_max - 273.15).toFixed(1);

  return (
    <div className="weather-container">
        {/* Main Weather Box */}
        <div className="weather-display">
            <h2>{name}</h2>
            <div className="icon-container">
                <h1>{Math.round(tempCelsius)}°C</h1>
                <img 
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                    alt="weather_ion" 
                    className="icon-img"
                    />
                    </div>
                <p>{description}</p>
            <p>Min: {Math.round(tempMinCelsius)}°C</p>
            <p>Max: {Math.round(tempMaxCelsius)}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {speed} m/s</p>
        </div>

        {/* Weekly Forecast Box */}
        <div className="weather-forecast">
            <h3>Weekly Forecast</h3>
            <div className="forecast-grid">
            {weeklyForecast.map((day, index) => (
                <div key={index} className="forecast-day">
                <p>{day.day}</p>
                <h4>{day.temp}°C</h4>
                <p>{day.condition}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default WeatherDisplay;
