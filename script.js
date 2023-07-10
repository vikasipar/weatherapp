let date;
let hrs;

function updateTime() {
  date = new Date();
  hrs = date.getHours();
  document.getElementById("time").innerHTML = date;
}
setInterval(updateTime, 1000);
updateTime();

console.log(date);
const images = [
  "images/morning.png",
  "images/afternoon.png",
  "images/evening.png",
  "images/night.png",
];

if (hrs >= 17 && hrs <= 19) {
  document.getElementById("weather-img").src = images[2];
  document.getElementById("weather").src = images[2];
} else if (hrs > 19 && hrs <= 23) {
  document.getElementById("weather-img").src = images[3];
  document.getElementById("weather").src = images[3];
} else if (hrs >= 1 && hrs < 6) {
  document.getElementById("weather-img").src = images[3];
  document.getElementById("weather").src = images[3];
} else if (hrs >= 6 && hrs <= 10) {
  document.getElementById("weather-img").src = images[0];
  document.getElementById("weather").src = images[0];
} else {
  document.getElementById("weather-img").src = images[1];
  document.getElementById("weather").src = images[1];
}

let city;
function getCity(newCity) {
  city = newCity = newCity.charAt(0).toUpperCase() + newCity.slice(1);
  console.log(city);

  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0e878eca62msha31c3d42fbfcfa2p114facjsn8d2b9e40cddb",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  (async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const cloudPercentage = result.cloud_pct;
      const temperature = result.temp;
      const feelsLike = result.feels_like;
      const humidity = result.humidity;
      const minTemperature = result.min_temp;
      const maxTemperature = result.max_temp;
      const windSpeed = result.wind_speed;

      document.getElementById("city").innerHTML = city;

      document.getElementById("temp").innerHTML = temperature;
      document.getElementById("cloud").innerHTML = cloudPercentage;
      document.getElementById("humidity").innerHTML = humidity;
      document.getElementById("min").innerHTML = minTemperature;
      document.getElementById("max").innerHTML = maxTemperature;
      document.getElementById("speed").innerHTML = windSpeed;

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })();
}
