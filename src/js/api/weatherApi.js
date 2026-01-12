import { GEO_API_URL, WEATHER_API_URL } from "../../config/apiConfig.js";

/**
 * Busca latitude e longitude a partir do nome da cidade
 */
export async function fetchCityCoordinates(cityName) {
  const url = `${GEO_API_URL}?name=${encodeURIComponent(cityName)}&count=1`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch city coordinates");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  return {
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
    name: data.results[0].name,
    country: data.results[0].country,
  };
}

/**
 * Busca a temperatura atual usando latitude e longitude
 */
export async function fetchCurrentWeather(latitude, longitude) {
  const url = `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();

  if (!data.current_weather) {
    throw new Error("Weather data not available");
  }

  return data.current_weather.temperature;
}
