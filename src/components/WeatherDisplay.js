import React from 'react';

function WeatherDisplay({ weatherData }) {
    const {
        name,
        main: { temp, temp_min, temp_max, humidity },
        weather,
        wind,
    } = weatherData;

    const temperature = Math.round(temp - 273.15); 
    const minTemp = Math.round(temp_min - 273.15);
    const maxTemp = Math.round(temp_max - 273.15);

    return (
        <div className="weather-display">
            <h2>{name}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Min: {minTemp}°C, Max: {maxTemp}°C</p>
            <p>Condition: {weather[0].description}</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {wind.speed} m/s</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="weather-icon"
            />
        </div>
    );
}

export default WeatherDisplay;
