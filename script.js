/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

document.querySelector("#burgermenu").addEventListener("click", burgerMenu);

function burgerMenu() {
    let x = document.querySelector("#myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
