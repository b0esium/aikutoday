export default function getLocation(callback) {
  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  let userLocation = {
    latitude: 0,
    longitude: 0,
    time: 0,
  };

  getPosition()
    .then((position) => {
      userLocation.latitude = position.coords.latitude;
      userLocation.longitude = position.coords.longitude;
      userLocation.time = position.timestamp;
      callback(userLocation);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
