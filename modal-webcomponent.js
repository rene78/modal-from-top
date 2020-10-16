// Get the infobox modal
const infobox = document.querySelector(".infobox");

//Show infobox after click on button
document.getElementById("open-infobox-link").addEventListener("click", () => {
  infobox.classList.add("show");
  infobox.classList.remove("hide");
});

//Close infobox after click on button
document.getElementById("close-infobox-link").addEventListener("click", () => {
  infobox.classList.remove("show");
  infobox.classList.add("hide");
});

//Close infobox after click on button
document.getElementById("open-infobox-3s").addEventListener("click", () => {
  infobox.classList.remove("hide");
  infobox.classList.add("show");
  setTimeout(() => {
    infobox.classList.remove("show");
    infobox.classList.add("hide");
  }, 3000);
});