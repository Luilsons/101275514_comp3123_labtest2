import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchMeteomaticsWeather } from './services/weatherService'; // Updated service function
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
    const [city, setCity] = useState('Toronto'); // Default city
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            const coordinates = getCityCoordinates(city); // Convert city to coordinates
            const endpoint = createMeteomaticsEndpoint(coordinates);
            const data = await fetchMeteomaticsWeather(endpoint);
            setWeatherData(data);
        };
        getWeather();
    }, [city]);

    const handleSearch = (searchCity) => {
        setCity(searchCity);
    };

    // Helper function to convert city to coordinates
    const getCityCoordinates = (city) => {
        const cityCoordinates = {
            Toronto: { lat: 43.65107, lon: -79.347015 },
            London: { lat: 51.5073219, lon: -0.1276474 },
            NewYork: { lat: 40.712776, lon: -74.005974 },
            // Add more cities as needed
        };
        return cityCoordinates[city] || { lat: 0, lon: 0 }; // Default coordinates
    };

    // Helper function to create Meteomatics API endpoint
    const createMeteomaticsEndpoint = ({ lat, lon }) => {
        const date = new Date().toISOString().split('.')[0]; // Current date and time
        return `${date}/t_2m:C/${lat},${lon}/json`; // Customize endpoint as needed
    };

    return (
        <div className="app">
            <h1>Weather Forecast</h1>
            <SearchBar onSearch={handleSearch} />
            {weatherData && <WeatherDisplay weatherData={weatherData} />}
        </div>
    );
}

export default App;
