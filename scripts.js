const apiKey = "e3de4f5ce765e6e8ff5126860a5d3855";

function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weatherInfo = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
        document.getElementById("weather-info").innerHTML = weatherInfo;
      } else {
        document.getElementById(
          "weather-info"
        ).innerHTML = `<p>${data.message}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weather-info").innerHTML =
        "<p>Error fetching weather data.</p>";
    });
}
