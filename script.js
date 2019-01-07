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

/////////HER STARTER TEMA FOLD UD  ////////////////////////////////


//Prøver lige igen

let boxShow = true;

document.querySelector(".button_open_1").addEventListener("click", checkIfOpen);

function checkIfOpen() {
    console.log("checkIfOpen");

    if (boxShow == false) {
        boxShow = true;
        //soundsOff();
        console.log("tænd for box");
        //tænd for sfx
        document.querySelector("#tema_01 .button_open_1").removeEventListener("click", checkIfOpen);
        //Ny linje
        document.querySelector(".button_open_1").classList = ("button_open_1");
        document.querySelector(".button_open_1").classList.add("on_off");
        document.querySelector(".button_open_1").classList.remove("on");
        showContent1();

    } else {
        boxShow = false;
        //soundsOn();
        console.log("sluk for box");
        //sluk for sfx
        document.querySelector("#tema_01 .button_open_1").removeEventListener("click", checkIfOpen);
        //Ny linje
        document.querySelector(".button_open_1").classList = ("button_open_1");
        document.querySelector(".button_open_1").classList.add("off_on");
        document.querySelector(".button_open_1").classList.remove("off");
        hideContent1();

    }
}


function hideContent1() {
    console.log("hideContent1");

    document.querySelector(".button_open_1").removeEventListener("click", hideContent1);

    document.querySelector(".hidden_content_1").classList.remove("hide");
    //Mathias har slettet dette
    //document.querySelector(".hidden_content_1").classList.add("open");



    //skift grafik fra grøn til rød
    document.querySelector(".button_open_1").classList.add("off")
    document.querySelector(".button_open_1").classList.remove("on")

    //gå til state of off
    document.querySelector(".button_open_1").classList.remove("on_off");
    document.querySelector(".button_open_1").classList.add("off");

    document.querySelector(".button_open_1").addEventListener("click", checkIfOpen);

}

function showContent1() {
    console.log("showContent1");

    document.querySelector(".button_open_1").removeEventListener("click", showContent1);

    //Mathias har slettet dette
    //document.querySelector(".hidden_content_1").classList = ("hide");
    document.querySelector(".hidden_content_1").classList.add("hide");


    //skift grafik fra rød til grøn
    document.querySelector(".button_open_1").classList.remove("off")
    document.querySelector(".button_open_1").classList.add("on")

    //gå til state of on
    document.querySelector(".button_open_1").classList.remove("off_on");
    document.querySelector(".button_open_1").classList.add("on");

    document.querySelector(".button_open_1").addEventListener("click", checkIfOpen);

}



/*// Det her skulle gerne få
document.querySelector("#tema_01 .button_open_1").addEventListener("click", checkIfOpen);


//Prøver lige noget
function checkIfOpen() {
    console.log("checkIfOpen");
    let h = document.querySelector(".button_open_1");
    let c = document.querySelector(".hidden_content_1")
    if (c.className = "open") {
        //c.className += " hide";
        document.querySelector(".button_open_1").addEventListener("click", hideContent1);
    } else {
        document.querySelector(".button_open_1").addEventListener("click", showContent1);
    }

}

function showContent1() {
    console.log("showContent1");
    document.querySelector(".hidden_content_1").classList.remove("hide");
    document.querySelector(".hidden_content_1").classList.add("open");
    checkIfOpen();

}

function hideContent1() {
    console.log("hideContent1");
    document.querySelector(".hidden_content_1").classList = ("hide");
}*/


//////////////////////////




/*
let hidden = document.querySelector(".button_open_1")


function checkIfOpen() {
    if
}

document.querySelector("#tema_01 .button_open_1 open").addEventListener("click", hideContent1);


function hideContent1() {
    console.log("hideContent1");
    document.querySelector(".hidden_content_1").classList.add("hide");
}
*/


//////////////////////HER STARTER SCROLL EVENTS ////////////////////////////////



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


/*//her giver vi bare div'en et kortere navn
let test = document.querySelector("#test_skrift");

//her tilføjer vi en eventlistener når vi scroller
window.addEventListener('scroll', function (event) {
    //her siger vi at hvis vores test element er indenfor viewporten - det er det vi tjekker i isInViewport - skal elementet test_skrift begynde en animation der hedder up_and_down
    if (isInViewport(test)) {
        document.querySelector("#test_skrift").classList = ("up_and_down")
    }
}, false);*/



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
