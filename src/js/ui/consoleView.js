export function showWeatherResult(data) {
  console.log("🌤️ Weather Information");
  console.log("----------------------");
  console.log(`City: ${data.city} (${data.country})`);
  console.log(`Current Temperature: ${data.temperature}°C`);
}

export function showError(message) {
  console.error("❌ Error:");
  console.error(message);
}
