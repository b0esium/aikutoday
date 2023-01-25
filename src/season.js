export default function getSeason(latitude, time) {
  let date = new Date(time);
  let month = date.getMonth();
  let season = "";
  // summer or winter months from 0 to 11
  let summerWinter = [11, 0, 1, 5, 6, 7];

  if (summerWinter.includes(month)) {
    // northern hemisphere
    latitude > 0 ? (season = "winter") : (season = "summer");
  } else {
    latitude > 0 ? (season = "spring") : (season = "autumn");
  }

  return season;
}
