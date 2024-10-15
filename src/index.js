const apiKey = "XLWPP8CCNRBJSR4KCRJSYRNLT";
const baseUrl =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

async function getWeatherData(location) {
  const container = document.querySelector("#weather-container");
  container.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch(`${baseUrl}${location}?key=${apiKey}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    container.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
  }
}

function processWeatherData(data) {
  const { temp, humidity, conditions } = data.currentConditions;
  return {
    temperature: temp,
    humidity: humidity,
    conditions: conditions,
  };
}

document
  .querySelector("#location-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = document.querySelector("#location-input").value;
    const weatherData = await getWeatherData(location);
    if (weatherData) {
      const processedData = processWeatherData(weatherData);
      displayWeatherData(processedData);
    }
  });

function displayWeatherData(weather) {
  const container = document.querySelector("#weather-container");
  container.innerHTML = `
    <p>Temperature: ${weather.temperature} °F</p>
    <p>Humidity: ${weather.humidity}%</p>
    <p>Conditions: ${weather.conditions}</p>`;
}
