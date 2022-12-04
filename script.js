addEventListener('click', change);

function change () {
    document.getElementById("emoji").setAttribute("src", "images/heart.png");
    
    setTimeout(function() {
        document.getElementsByClassName("que")[0].innerText = "axha chal ab aa bol aa,";
        document.getElementsByClassName("que")[1].innerText = "muje tumhare muh me mere bache marne hai";
        document.getElementById("ans").classList.add("hidden");
    }, 200);

}
