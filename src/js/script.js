const GEO_API_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";


const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const output = document.getElementById("output");


async function getWeather(cityName) {
output.innerHTML = "";


if (!cityName) {
showError("Por favor, informe o nome da cidade.");
return;
}


try {
const geoResponse = await fetch(`${GEO_API_URL}?name=${encodeURIComponent(cityName)}&count=1`);
if (!geoResponse.ok) throw new Error("Erro ao buscar a cidade");


const geoData = await geoResponse.json();
if (!geoData.results || geoData.results.length === 0) {
throw new Error("Cidade não encontrada");
}


const { latitude, longitude, name, country } = geoData.results[0];


const weatherResponse = await fetch(
`${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
);
if (!weatherResponse.ok) throw new Error("Erro ao buscar o clima");


const weatherData = await weatherResponse.json();
const temperature = weatherData.current_weather.temperature;


output.innerHTML = `
<div class="result">
<strong>${name} (${country})</strong><br />
Temperatura atual: ${temperature}°C
</div>
`;
} catch (error) {
showError(error.message);
}
}


function showError(message) {
output.innerHTML = `<div class="error">❌ ${message}</div>`;
}


searchBtn.addEventListener("click", () => {
const cityName = cityInput.value.trim();
getWeather(cityName);
});


cityInput.addEventListener("keypress", (event) => {
if (event.key === "Enter") {
getWeather(cityInput.value.trim());
}
});