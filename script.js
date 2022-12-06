import heart from "./images/heart.png";

var noButton = document.getElementById("no");
var emoji = document.getElementById("emoji");

 function change() {
  emoji.setAttribute("src", heart);
  emoji.style.scale = ".3";
  noButton.classList.add("opacity-0");

  setTimeout(function () {
    emoji.style.scale = "1.0";
    document.getElementsByClassName("que")[0].innerText =
      "axha chal ab aa bol aa,";
    document.getElementsByClassName("que")[1].innerText =
      "muje tumhare muh me mere bache marne hai";
    document.getElementById("ans").classList.add("hidden");
  }, 400);
}

let random;
let random2;

setInterval(function () {
  random = Math.floor(Math.random() * 300) + "px";
  random2 = Math.floor(Math.random() * 300) + "px";
}, 10);

 function noPos() {
  noButton.style.scale = "1.3";
  noButton.style.top = random;
  noButton.style.left = random2;
  setTimeout(function () {
    noButton.style.scale = "1.0";
  }, 200);
}

window.noPos = noPos
window.change = change