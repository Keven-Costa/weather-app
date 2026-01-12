export function showWeather(data) {
  const output = document.getElementById("output");

  output.innerHTML = `
    <div class="result">
      <strong>${data.name} (${data.country})</strong><br />
      Temperatura atual: ${data.temperature}°C
    </div>
  `;
}

export function showError(message) {
  const output = document.getElementById("output");

  output.innerHTML = `
    <div class="error">❌ ${message}</div>
  `;
}
