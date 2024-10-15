/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
    <p>Temperature: ${weather.temperature} °C</p>
    <p>Humidity: ${weather.humidity}%</p>
    <p>Conditions: ${weather.conditions}</p>`;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVEsRUFBRSxTQUFTLE9BQU8sT0FBTztBQUNyRTtBQUNBLDBDQUEwQyxnQkFBZ0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDZCQUE2QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0MsbUJBQW1CLGlCQUFpQjtBQUNwQyxxQkFBcUIsbUJBQW1CO0FBQ3hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlLZXkgPSBcIlhMV1BQOENDTlJCSlNSNEtDUkpTWVJOTFRcIjtcbmNvbnN0IGJhc2VVcmwgPVxuICBcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL1wiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8cD5Mb2FkaW5nLi4uPC9wPlwiO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2xvY2F0aW9ufT9rZXk9JHthcGlLZXl9YCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNwb25zZSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6XCIsIGVycm9yKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkVycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YS4gUGxlYXNlIHRyeSBhZ2Fpbi48L3A+JztcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEoZGF0YSkge1xuICBjb25zdCB7IHRlbXAsIGh1bWlkaXR5LCBjb25kaXRpb25zIH0gPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zO1xuICByZXR1cm4ge1xuICAgIHRlbXBlcmF0dXJlOiB0ZW1wLFxuICAgIGh1bWlkaXR5OiBodW1pZGl0eSxcbiAgICBjb25kaXRpb25zOiBjb25kaXRpb25zLFxuICB9O1xufVxuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbi1mb3JtXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uLWlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xuICAgIGlmICh3ZWF0aGVyRGF0YSkge1xuICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgICBkaXNwbGF5V2VhdGhlckRhdGEocHJvY2Vzc2VkRGF0YSk7XG4gICAgfVxuICB9KTtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEYXRhKHdlYXRoZXIpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLWNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8cD5UZW1wZXJhdHVyZTogJHt3ZWF0aGVyLnRlbXBlcmF0dXJlfSDCsEM8L3A+XG4gICAgPHA+SHVtaWRpdHk6ICR7d2VhdGhlci5odW1pZGl0eX0lPC9wPlxuICAgIDxwPkNvbmRpdGlvbnM6ICR7d2VhdGhlci5jb25kaXRpb25zfTwvcD5gO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9