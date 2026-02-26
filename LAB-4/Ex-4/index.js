let cache = {};

const btn = document.getElementById("getWeather");
const cityInput = document.getElementById("city");
const weatherDiv = document.getElementById("weather");
const loader = document.getElementById("loader");

btn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (!city) return;

    if (cache[city]) {
        display(cache[city]);
        return;
    }

    loader.textContent = "Loading...";
    weatherDiv.innerHTML = "";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
    .then(res => res.json())
    .then(data => {
        loader.textContent = "";
        if (data.cod !== 200) {
            weatherDiv.innerHTML = "City not found";
            return;
        }
        cache[city] = data;
        display(data);
    })
    .catch(() => {
        loader.textContent = "";
        weatherDiv.innerHTML = "Network error";
    });
});

function display(data) {
    weatherDiv.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.main.temp} °C</p>
        <p>${data.main.humidity}% Humidity</p>
        <p>${data.weather[0].description}</p>
    `;
}