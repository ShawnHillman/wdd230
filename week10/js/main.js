const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=b650d442616f7081512ff0ae0fb0b7ac";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    let kelvin = jsObject.main.temp;
    let farenheit = (kelvin -273.15)* 1.8 + 32;
    document.querySelector("#current-temp").textContent = farenheit.toFixed(2);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
};

getWeather();