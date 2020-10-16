// Get the infobox modal
const infobox = document.querySelector(".infobox");

//Show infobox after click on button
function openAlarmModal(type, text) {
  infobox.classList.remove("show", "alarm", "success");
  void infobox.offsetWidth; //Found here: https://css-tricks.com/restart-css-animation/#update-another-javascript-method-to-restart-a-css-animation
  infobox.innerHTML = text;
  infobox.classList.add("show", type);
}

document.getElementById("get-text").addEventListener("click", () => {
  const text = document.getElementById("infobox-text").value;
  // console.log(text);
  var color = document.querySelector('input[name = "color"]:checked').value;
  // console.log(color);
  openAlarmModal(color, text);
});