import axios from 'axios';

// Base URL for OpenWeatherMap API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Environment variable for API key
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * Fetch weather data for a given city.
 * @param {string} city 
 * @returns {object | null} 
 */
export const fetchWeather = async (city) => {
    try {
        if (!API_KEY) {
            throw new Error('API key is missing. Please check your .env file.');
        }

        const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
        console.log('Fetching weather data from URL:', url); 

        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error(`Unexpected API response: ${response.status}`);
        }

        console.log('Weather data fetched successfully:', response.data); 
        return response.data; 
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null; 
    }
};
