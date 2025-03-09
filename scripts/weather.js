const API_KEY = "70f2e9d9260e304c9d970ac693ded756";

// weather container and its elemetns
const weahter = document.querySelector(".weather");
const weatherLocation = weahter.querySelector(".weather__location");
const weatherTemp = weahter.querySelector(".weather__temp");
const weahterMain = weahter.querySelector(".weather__main");

// Get current position's location
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        weatherLocation.innerHTML = data.name;
        weatherTemp.innerHTML = `${Math.round(data.main.temp)}°`;
        weahterMain.innerHTML = data.weather[0].main;
      });
  },
  (error) => {
    alert("Error:", error.message);
  }
);
