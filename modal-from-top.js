// Get the infobox modal
const infobox = document.querySelector(".infobox");

//Show infobox after click on button
document.getElementById("open-infobox-link").addEventListener("click", () => {
  infobox.classList.remove("show");
  void infobox.offsetWidth; //Found here: https://css-tricks.com/restart-css-animation/#update-another-javascript-method-to-restart-a-css-animation
  infobox.classList.add("show");
});