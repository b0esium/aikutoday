export default function getWeather(latitude, longitude, callback) {
  fetch(`/weatherapi?lat=${latitude}&lon=${longitude}`)
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
