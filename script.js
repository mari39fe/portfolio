/////////HER STARTER BURGERMENUEN ////////////////////////////////

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


/////////HER STARTER SCROLL TO TOP ////////////////////////////////

window.onscroll = function () {
    scrollTopButton()
};

function scrollTopButton() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector("#top_button").classList = "appear";
    } else {
        document.querySelector("#top_button").classList = "hide";
    }
}




/////////HER STARTER SPLASH ANIMATIONER ////////////////////////////////

window.addEventListener("load", showPage);

/* Her skal defineres en variabel for pile op og ned som skal være true som default */

function showPage() {
    console.log("showPage");
    bigBox();
}


function bigBox() {
    console.log("bigBox");
    document.querySelector("#box2").classList.add("in_right");
    document.querySelector("#circle1").classList.add("in_bottom");
    document.querySelector("#circle2").classList.add("in_bottom2");
    document.querySelector("#circle3").classList.add("in_bottom3");

}

document.querySelector("#box2").addEventListener("animationend", smallBoxes);


function smallBoxes() {
    console.log("smallBoxes");
    document.querySelector("#box1").classList.add("in_left_2");
    document.querySelector("#box3").classList.add("in_left");
}

document.querySelector("#box3").addEventListener("animationend", lettersPortfolio);

function lettersPortfolio() {
    console.log("lettersPortfolio");


    document.querySelector("#streg").classList = ("streg_class");
    document.querySelector("#letter1").classList = ("moving_letters");
    document.querySelector("#letter2").classList = ("moving_letters_2");
    document.querySelector("#letter3").classList = ("moving_letters_3");
    document.querySelector("#letter4").classList = ("moving_letters_4");
    document.querySelector("#letter5").classList = ("moving_letters_5");
    document.querySelector("#letter6").classList = ("moving_letters_6");
    document.querySelector("#letter7").classList = ("moving_letters_7");
    document.querySelector("#letter8").classList = ("moving_letters_8");
    document.querySelector("#letter9").classList = ("moving_letters_9");
    document.querySelector("#letter10").classList = ("moving_letters_10");


}

document.querySelector("#streg").addEventListener("animationend", hideStreg);

function hideStreg() {
    console.log("hideStreg");
    document.querySelector("#streg").classList = ("hide");
    nameAppear();

}


function nameAppear() {
    console.log("nameAppear");
    document.querySelector("#name").classList = ("appear");

}

document.querySelector("#name").addEventListener("animationend", buttonAppear);

function buttonAppear() {
    console.log("buttonAppear");
    document.querySelector("#splash_button").classList = ("appear");
    document.querySelector("#splash_button").classList = ("up_and_down");

}

/////////HER STARTER TEMA FOLD UD - TEMA 1 BOX1 ////////////////////////////////


//Prøver lige igen

let boxShow = true;

document.querySelector(".button_open_1").addEventListener("click", checkIfOpen);

function checkIfOpen() {
    console.log("checkIfOpen");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_01 .button_open_1").removeEventListener("click", checkIfOpen);
        //Ny linje
        document.querySelector(".button_open_1").classList = ("button_open_1");
        document.querySelector(".button_open_1").classList.add("on_off");
        document.querySelector(".button_open_1").classList.add("top");
        document.querySelector(".button_open_1").classList.remove("on");
        hideContent1();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_01 .button_open_1").removeEventListener("click", checkIfOpen);
        //Ny linje
        document.querySelector(".button_open_1").classList = ("button_open_1");
        document.querySelector(".button_open_1").classList.add("off_on");
        document.querySelector(".button_open_1").classList.add("down");
        document.querySelector(".button_open_1").classList.remove("off");
        showContent1();

    }
}


function showContent1() {
    console.log("showContent1");

    document.querySelector(".button_open_1").removeEventListener("click", showContent1);

    document.querySelector(".hidden_content_1").classList.remove("hide");
    document.querySelector(".button_open_1").addEventListener("click", checkIfOpen);

}

function hideContent1() {
    console.log("hideContent1");

    document.querySelector(".button_open_1").removeEventListener("click", hideContent1);
    document.querySelector(".hidden_content_1").classList.add("hide");
    document.querySelector(".button_open_1").addEventListener("click", checkIfOpen);


}

/////////HER STARTER TEMA FOLD UD - TEMA 1 BOX2 ////////////////////////////////


//Prøver lige igen


document.querySelector(".button_open_2").addEventListener("click", checkIfOpen2);

function checkIfOpen2() {
    console.log("checkIfOpen2");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_01 .button_open_2").removeEventListener("click", checkIfOpen2);
        //Ny linje
        document.querySelector(".button_open_2").classList = ("button_open_2");
        document.querySelector(".button_open_2").classList.add("on_off");
        document.querySelector(".button_open_2").classList.add("top");
        document.querySelector(".button_open_2").classList.remove("on");
        hideContent2();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_01 .button_open_2").removeEventListener("click", checkIfOpen2);
        //Ny linje
        document.querySelector(".button_open_2").classList = ("button_open_2");
        document.querySelector(".button_open_2").classList.add("off_on");
        document.querySelector(".button_open_2").classList.add("down");
        document.querySelector(".button_open_2").classList.remove("off");
        showContent2();

    }
}


function showContent2() {
    console.log("showContent2");

    document.querySelector(".button_open_2").removeEventListener("click", showContent2);

    document.querySelector(".hidden_content_2").classList.remove("hide");
    document.querySelector(".button_open_2").addEventListener("click", checkIfOpen2);

}

function hideContent2() {
    console.log("hideContent2");

    document.querySelector(".button_open_2").removeEventListener("click", hideContent2);
    document.querySelector(".hidden_content_2").classList.add("hide");
    document.querySelector(".button_open_2").addEventListener("click", checkIfOpen2);


}




///////////////////HER STARTER SCROLL EVENTS - DEN GENERELLE FUNKTION  /////////////////////////



//source: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/

//her siger vi at isInViewport er en funktion der kan reagere med et element
//i dette tilfælde test
//så tjekker bounding om vores element er indenfor viewporten
let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};





////////////// HER STARTER TEMA 1 TITLENS ANIMATION ////////////////////////

let streg_tema_1 = document.querySelector("#streg_tema_01");
let letter1_tema_1 = document.querySelector("#letter1_tema_01");
let letter2_tema_1 = document.querySelector("#letter2_tema_01");
let letter3_tema_1 = document.querySelector("#letter3_tema_01");
let letter4_tema_1 = document.querySelector("#letter4_tema_01");
let letter5_tema_1 = document.querySelector("#letter5_tema_01");
let letter6_tema_1 = document.querySelector("#letter6_tema_01");
let letter7_tema_1 = document.querySelector("#letter7_tema_01");

window.addEventListener('scroll', function (event) {
    if (isInViewport(streg_tema_1, letter1_tema_1, letter2_tema_1, letter3_tema_1, letter4_tema_1, letter5_tema_1, letter6_tema_1, letter7_tema_1, )) {
        document.querySelector("#streg_tema_01").classList = ("streg_class")
        document.querySelector("#letter1_tema_01").classList = ("moving_letters")
        document.querySelector("#letter2_tema_01").classList = ("moving_letters_2")
        document.querySelector("#letter3_tema_01").classList = ("moving_letters_3")
        document.querySelector("#letter4_tema_01").classList = ("moving_letters_4")
        document.querySelector("#letter5_tema_01").classList = ("moving_letters_5")
        document.querySelector("#letter6_tema_01").classList = ("moving_letters_6")
        document.querySelector("#letter7_tema_01").classList = ("moving_letters_7")
    }
}, false);




////////////// HER STARTER TEMA 2 TITLENS ANIMATION ////////////////////////

let streg = document.querySelector("#streg_tema_02");
let letter1 = document.querySelector("#letter1_tema_02");
let letter2 = document.querySelector("#letter2_tema_02");
let letter3 = document.querySelector("#letter3_tema_02");
let letter4 = document.querySelector("#letter4_tema_02");
let letter5 = document.querySelector("#letter5_tema_02");
let letter6 = document.querySelector("#letter6_tema_02");
let letter7 = document.querySelector("#letter7_tema_02");

window.addEventListener('scroll', function (event) {
    if (isInViewport(streg, letter1, letter2, letter3, letter4, letter5, letter6, letter7, )) {
        document.querySelector("#streg_tema_02").classList = ("streg_class")
        document.querySelector("#letter1_tema_02").classList = ("moving_letters")
        document.querySelector("#letter2_tema_02").classList = ("moving_letters_2")
        document.querySelector("#letter3_tema_02").classList = ("moving_letters_3")
        document.querySelector("#letter4_tema_02").classList = ("moving_letters_4")
        document.querySelector("#letter5_tema_02").classList = ("moving_letters_5")
        document.querySelector("#letter6_tema_02").classList = ("moving_letters_6")
        document.querySelector("#letter7_tema_02").classList = ("moving_letters_7")
    }
}, false);


////////////// HER STARTER TEMA 3 TITLENS ANIMATION ////////////////////////

let streg_tema_3 = document.querySelector("#streg_tema_03");
let letter1_tema_3 = document.querySelector("#letter1_tema_03");
let letter2_tema_3 = document.querySelector("#letter2_tema_03");
let letter3_tema_3 = document.querySelector("#letter3_tema_03");
let letter4_tema_3 = document.querySelector("#letter4_tema_03");
let letter5_tema_3 = document.querySelector("#letter5_tema_03");
let letter6_tema_3 = document.querySelector("#letter6_tema_03");
let letter7_tema_3 = document.querySelector("#letter7_tema_03");

window.addEventListener('scroll', function (event) {
    if (isInViewport(streg_tema_3, letter1_tema_3, letter2_tema_3, letter3_tema_3, letter4_tema_3, letter5_tema_3, letter6_tema_3, letter7_tema_3, )) {
        document.querySelector("#streg_tema_03").classList = ("streg_class")
        document.querySelector("#letter1_tema_03").classList = ("moving_letters")
        document.querySelector("#letter2_tema_03").classList = ("moving_letters_2")
        document.querySelector("#letter3_tema_03").classList = ("moving_letters_3")
        document.querySelector("#letter4_tema_03").classList = ("moving_letters_4")
        document.querySelector("#letter5_tema_03").classList = ("moving_letters_5")
        document.querySelector("#letter6_tema_03").classList = ("moving_letters_6")
        document.querySelector("#letter7_tema_03").classList = ("moving_letters_7")
    }
}, false);


////////////// HER STARTER TEMA 4 TITLENS ANIMATION ////////////////////////

let streg_tema_4 = document.querySelector("#streg_tema_04");
let letter1_tema_4 = document.querySelector("#letter1_tema_04");
let letter2_tema_4 = document.querySelector("#letter2_tema_04");
let letter3_tema_4 = document.querySelector("#letter3_tema_04");
let letter4_tema_4 = document.querySelector("#letter4_tema_04");
let letter5_tema_4 = document.querySelector("#letter5_tema_04");
let letter6_tema_4 = document.querySelector("#letter6_tema_04");
let letter7_tema_4 = document.querySelector("#letter7_tema_04");

window.addEventListener('scroll', function (event) {
    if (isInViewport(streg_tema_4, letter1_tema_4, letter2_tema_4, letter3_tema_4, letter4_tema_4, letter5_tema_4, letter6_tema_4, letter7_tema_4, )) {
        document.querySelector("#streg_tema_04").classList = ("streg_class")
        document.querySelector("#letter1_tema_04").classList = ("moving_letters")
        document.querySelector("#letter2_tema_04").classList = ("moving_letters_2")
        document.querySelector("#letter3_tema_04").classList = ("moving_letters_3")
        document.querySelector("#letter4_tema_04").classList = ("moving_letters_4")
        document.querySelector("#letter5_tema_04").classList = ("moving_letters_5")
        document.querySelector("#letter6_tema_04").classList = ("moving_letters_6")
        document.querySelector("#letter7_tema_04").classList = ("moving_letters_7")
    }
}, false);


////////////// HER STARTER ABOUT TITLENS ANIMATION ////////////////////////

let streg_about = document.querySelector("#streg_about");
let letter1_about = document.querySelector("#letter1_about");
let letter2_about = document.querySelector("#letter2_about");
let letter3_about = document.querySelector("#letter3_about");
let letter4_about = document.querySelector("#letter4_about");
let letter5_about = document.querySelector("#letter5_about");
let letter6_about = document.querySelector("#letter6_about");

window.addEventListener('scroll', function (event) {
    if (isInViewport(streg_about, letter1_about, letter2_about, letter3_about, letter4_about, letter5_about, letter6_about, )) {
        document.querySelector("#streg_about").classList = ("streg_class")
        document.querySelector("#letter1_about").classList = ("moving_letters")
        document.querySelector("#letter2_about").classList = ("moving_letters_2")
        document.querySelector("#letter3_about").classList = ("moving_letters_3")
        document.querySelector("#letter4_about").classList = ("moving_letters_4")
        document.querySelector("#letter5_about").classList = ("moving_letters_5")
        document.querySelector("#letter6_about").classList = ("moving_letters_6")
    }
}, false);
