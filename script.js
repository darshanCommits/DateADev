function change() {
  document.getElementById("emoji").setAttribute("src", "images/heart.png");

  setTimeout(function () {
    document.getElementsByClassName("que")[0].innerText =
      "axha chal ab aa bol aa,";
    document.getElementsByClassName("que")[1].innerText =
      "muje tumhare muh me mere bache marne hai";
    document.getElementById("ans").classList.add("hidden");
  }, 200);
}

let random;
let random2;

setInterval(function() {
    random = Math.floor(Math.random() * 200) + "px";
    random2 = Math.floor(Math.random() * 200) + "px";
}, 10) 


function noPos() {
    var noButton =  document.getElementById("no");

    for(let i = 0 ; i <= 99 ; i++){ 
        noButton.style.scale = "1.1";
        noButton.style.top = random;
        noButton.style.left = random2;
    }

 

}

