let now = new Date();

let h6 = document.querySelector("h6");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h6.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let apiKey = "fdd9ef011491bdd0ac653f81ffb9ed48";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  let currentCity = document.querySelector(".currentcity");
  currentCity.innerHTML = `${cityInput.value}`;
  axios.get(apiUrl).then(cityTemperature);
}

function cityTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureDisplay = document.querySelector("#current-temp");
  temperatureDisplay.innerHTML = `${temperature}°C`;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
