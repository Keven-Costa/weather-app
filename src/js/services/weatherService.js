import {
  fetchCityCoordinates,
  fetchCurrentWeather,
} from "../api/weatherApi.js";

export async function getCityWeather(cityName) {
  const city = await fetchCityCoordinates(cityName);

  const temperature = await fetchCurrentWeather(
    city.latitude,
    city.longitude
  );

  return {
    name: city.name,
    country: city.country,
    temperature,
  };
}
