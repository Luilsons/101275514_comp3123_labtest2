import axios from 'axios';

// Meteomatics credentials
const username = 'georgebrowncollege_sousadosreis_luilsonmarcos';
const password = 'Pp0boml34E';
const BASE_URL = 'https://api.meteomatics.com';

/**
 * Fetch weather data from Meteomatics API.
 * @param {string} endpoint - The specific endpoint for the weather data query.
 * @returns {object | null} - Weather data from Meteomatics API or null if there's an error.
 */
export const fetchMeteomaticsWeather = async (endpoint) => {
    try {
        const url = `${BASE_URL}/${endpoint}`;
        console.log('Fetching weather data from URL:', url); // Debugging log

        const response = await axios.get(url, {
            auth: {
                username: username,
                password: password,
            },
        });

        console.log('Weather data fetched successfully:', response.data); // Debugging log
        return response.data; // Return the weather data
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null; // Return null if there's an error
    }
};
