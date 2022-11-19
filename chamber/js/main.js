function viewNav() {
    let nav = document.querySelector("#navigation");
    let content = document.querySelector("main");
    let footer = document.querySelector("footer");

    nav.classList.toggle("up");
    content.classList.toggle("up");
    footer.classList.toggle("up");
}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5596475&appid=b650d442616f7081512ff0ae0fb0b7ac";

function windChill(kelvin) {
    return Math.round(1.8 * (kelvin - 273.15) + 32);
}

const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);

    let kelvin = jsObject.main.temp;
    // console.log(jsObject.main.temp);
    let farenheit = windChill(kelvin);
    // console.log(farenheit);
    document.querySelector("#current-temp").textContent = farenheit;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;

    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#weather-type').textContent = desc;
    document.querySelector('#wind-speed').textContent = jsObject.wind.speed;
    let windchill = document.querySelector('#wind-chill');
    if(jsObject.wind.speed === 0) {
        windchill.textContent = "N/A";
    } else {
        windchill.textContent = windChill(jsObject.main.feels_like) + "°";
    }
};

getWeather();