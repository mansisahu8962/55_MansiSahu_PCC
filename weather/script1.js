async function fetchWeather(city) {
    const url =
    "https://foreca-weather.p.rapidapi.com/current/102643743?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4ec35af24amsh65d248ffd27221ep1cbfc3jsn36f0bdc69caa",
      "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
    document.getElementById("cityName").textContent = city;
    document.getElementById("time").textContent = result.current.time;
    document.getElementById("symbol").textContent = result.current.symbol;
    document.getElementById("symbolPhrase").textContent = result.current.symbolPhrase;
    document.getElementById("temperature").textContent = result.current.temperature;
    document.getElementById("temperature1").textContent = result.current.temperature;
    document.getElementById("feelsLikeTemp").textContent = result.current.feelsLikeTemp;
    document.getElementById("relHumidity").textContent = result.current.relHumidity;
    document.getElementById("dewPoint").innerHTML = result.current.dewPoint;
    document.getElementById("windSpeed").innerHTML = result.current.windSpeed;
    document.getElementById("windSpeed1").innerHTML = result.current.windSpeed;
    document.getElementById("windDir").innerHTML = result.current.windDir;
    document.getElementById("windDirString").innerHTML = result.current.windDirString;
    document.getElementById("windGust").innerHTML = result.current.windGust;
    document.getElementById("precipProb").innerHTML = result.current.precipProb;
    document.getElementById("precipRate").innerHTML = result.current.precipRate;
    document.getElementById("precipRate1").innerHTML = result.current.precipRate;
    document.getElementById("cloudiness").innerHTML = result.current.cloudiness;
    document.getElementById("thunderProb").innerHTML = result.current.thunderProb;
    document.getElementById("uvIndex").innerHTML = result.current.uvIndex;
    document.getElementById("pressure").innerHTML = result.current.pressure;
    document.getElementById("visibility").innerHTML = result.current.visibility;
  } catch (error) {
    console.error(error);
  }
}


document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  fetchWeather(city);
});

fetchWeather("Mumbai");
