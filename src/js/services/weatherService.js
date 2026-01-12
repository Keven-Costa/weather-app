import {
  fetchCityCoordinates,
  fetchCurrentWeather,
} from "../api/weatherApi.js";

/**
 * Obtém a temperatura atual de uma cidade
 */
export async function getCityTemperature(cityName) {
  // 1. Busca coordenadas da cidade
  const city = await fetchCityCoordinates(cityName);

  // 2. Busca temperatura atual
  const temperature = await fetchCurrentWeather(
    city.latitude,
    city.longitude
  );

  return {
    city: city.name,
    country: city.country,
    temperature,
  };
}
