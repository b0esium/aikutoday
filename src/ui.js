export default class UI {
  static displayHaiku(haikuContent) {
    const card = document.querySelector(".card");
    card.classList.remove("d-none");
    const haiku = document.getElementById("haiku");
    haiku.innerText = haikuContent;
  }

  static displayImage(imageSrc) {
    const imageDiv = document.getElementById("image");
    const image = document.createElement("img");
    image.classList.add("rounded", "img-fluid", "img-thumbnail");
    image.src = imageSrc;
    // wait until image is fully loaded
    image.addEventListener(onload, showImage());

    function showImage() {
      // remove spinner
      const imageSpinner = document.querySelector(".spinner-grow");
      imageSpinner.classList.add("d-none");
      imageDiv.appendChild(image);
      // show tip widget
      const tip = document.getElementById("tip");
      tip.style.display = "flex";
    }
  }
}
