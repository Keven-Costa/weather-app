import { getCityWeather } from "./services/weatherService.js";
import { showWeather, showError } from "./ui/weatherView.js";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

async function handleSearch() {
  const cityName = cityInput.value.trim();

  if (!cityName) {
    showError("Informe o nome da cidade");
    return;
  }

  try {
    const weather = await getCityWeather(cityName);
    showWeather(weather);
  } catch (error) {
    showError(error.message);
  }
}

searchBtn.addEventListener("click", handleSearch);

cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
