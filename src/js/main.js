import { getCityTemperature } from "./services/weatherService.js";
import { showWeatherResult, showError } from "./ui/consoleView.js";

// Captura o nome da cidade via terminal
const cityName = process.argv[2];

if (!cityName) {
  showError("Please provide a city name. Example: node main.js London");
  process.exit(1);
}

async function run() {
  try {
    const result = await getCityTemperature(cityName);
    showWeatherResult(result);
  } catch (error) {
    showError(error.message);
  }
}

run();
