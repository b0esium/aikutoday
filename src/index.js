import "./style.css";
import UI from "./ui.js";
import getWeather from "./weather.js";
import getLocation from "./location.js";
import getSeason from "./season.js";
import getHour from "./hour";
import getHaiku from "./haiku.js";
import getImage from "./image.js";

function getUserLocation() {
  return new Promise((resolve) => {
    getLocation(resolve);
  });
}

function getUserWeather(latitude, longitude) {
  return new Promise((resolve) => {
    getWeather(latitude, longitude, resolve);
  });
}

function getUserHaiku(situation) {
  return new Promise((resolve) => {
    getHaiku(situation, resolve);
  });
}

function getUserImage(haiku) {
  return new Promise((resolve) => {
    getImage(haiku, resolve);
  });
}

async function main() {
  try {
    // get location from browser API
    let userLocation = await getUserLocation();

    // get weather from openweathermap API
    let weather = await getUserWeather(
      userLocation.latitude,
      userLocation.longitude
    );

    // build user's situation
    let situation = {
      hour: getHour(userLocation.time),
      season: getSeason(userLocation.latitude, userLocation.time),
      weather: weather,
    };

    // get haiku from openAI API
    let haiku = await getUserHaiku(situation);
    UI.displayHaiku(`${haiku}`);

    // draw image from openAI API
    let image = await getUserImage(haiku);
    UI.displayImage(image);
  } catch (error) {
    console.log(error);
  }
}

main();
