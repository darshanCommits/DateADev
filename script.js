addEventListener('click', change);

function change () {
    document.getElementById("emoji").setAttribute("src", "images/heart.png");
    
    setTimeout(function() {
        document.getElementsByClassName("text-xl")[0].classList.add("invisible");
        document.getElementsByClassName("text-xl")[1].classList.add("invisible");
        document.getElementById("ans").classList.add("invisible");
    }, 200);

}
