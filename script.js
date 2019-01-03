/* øverste linje selvskrevet - gør vidst ikke noget*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

document.querySelector.addEventListener("click", myFunction);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
