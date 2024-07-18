const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const weatherType = document.getElementById("weather-type");
const temp = document.getElementById("temp");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");

const getWeatherData = async (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d72c98894cmsh28b3af34c5863e1p19f360jsne4b9c3aa39ec",
      "X-RapidAPI-Host": "community-open-weather-map.o.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};

const searchCity = async () => {
  const city = cityInput.value;
  console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);
};

const showWeatherData = (weatherData) => {
  weatherType.innerText = weatherData.weather[0].main;
  temp.innerText = weatherData.main.temp;
  cityName.innerText = weatherData.name;
  minTemp.innerText = weatherData.main.temp_min;
  maxTemp.innerText = weatherData.main.temp_max;
};
