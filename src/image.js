export default function getImage(haiku, callback) {
  // format haiku
  haiku = haiku.slice(1, 1) + haiku.slice(2).replace(/\n/g, " ");

  const prompt = `${haiku}, in the style of Japanese paintings`;

  fetch(`/openaiapi/image?prompt=${prompt}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let image = response.data[0]["url"];
      callback(image);
    })
    .catch((error) => console.log(error.message));
}
