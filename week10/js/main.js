const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=b650d442616f7081512ff0ae0fb0b7ac";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();