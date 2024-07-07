const apiKey = "26b0b72f504bd4723597c13b62989a24";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_box = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404 || response.status == 400) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").classList.remove("show");
    } else {
        var data = await response.json();

        updateValue(document.querySelector(".city"), data.name);
        updateValue(document.querySelector(".wind"), data.wind.speed + " km/h");
        updateValue(document.querySelector(".temperature"), Math.round(data.main.temp) + "°c");
        updateValue(document.querySelector(".humidity"), data.main.humidity + "%");
        animateIcon(weather_icon, `images/${data.weather[0].main}.png`);

        document.querySelector(".weather").classList.add("show");
        document.querySelector(".error").style.display = "none";
    }
}

function updateValue(element, newValue) {
    element.classList.add("animate");
    setTimeout(() => {
        element.classList.remove("animate");
        element.innerHTML = newValue;
    }, 300);
}

function animateIcon(iconElement, newSrc) {
    iconElement.classList.add("animate");
    setTimeout(() => {
        iconElement.src = newSrc;
        iconElement.classList.remove("animate");
        iconElement.classList.add("new");
        setTimeout(() => {
            iconElement.classList.remove("new");
            iconElement.classList.add("continuous");
        }, 500);
    }, 500);
}

search_btn.addEventListener("click", () => {
    checkWeather(search_box.value);
});

checkWeather();
