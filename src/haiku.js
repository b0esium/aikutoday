export default function getHaiku(situation, callback) {
  const prompt = `Write a haiku about a ${situation.weather} ${situation.hour} in ${situation.season}`;

  fetch(`http://127.0.0.1:5000/openaiapi/text?prompt=${prompt}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let haiku = response.choices[0]["text"];
      callback(haiku);
    })
    .catch((error) => console.log(error.message));
}
