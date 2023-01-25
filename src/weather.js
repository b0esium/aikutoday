export default function getWeather(latitude, longitude, callback) {
  fetch(`http://127.0.0.1:5000/weatherapi?lat=${latitude}&lon=${longitude}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data.weather[0].main);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
