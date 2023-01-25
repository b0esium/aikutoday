export default function getHour(time) {
  let date = new Date(time);
  let localHour = date.getHours();
  let hour = "";
  if (localHour > 6 && localHour < 12) {
    hour = "morning";
  } else if (localHour > 12 && localHour < 18) {
    hour = "afternoon";
  } else if (localHour > 18 && localHour < 23) {
    hour = "evening";
  } else {
    hour = "night";
  }
  return hour;
}
