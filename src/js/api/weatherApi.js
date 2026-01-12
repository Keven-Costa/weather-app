import {
  GEO_API_URL,
  WEATHER_API_URL,
} from "../config/apiConfig.js";

export async function fetchCityCoordinates(cityName) {
  const url = `${GEO_API_URL}?name=${encodeURIComponent(cityName)}&count=1`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao buscar a cidade");
  }

  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("Cidade não encontrada");
  }

  return data.results[0];
}

export async function fetchCurrentWeather(latitude, longitude) {
  const url = `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao buscar o clima");
  }

  const data = await response.json();
  return data.current_weather.temperature;
}
