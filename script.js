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


/////////HER STARTER TEMA FOLD UD - TEMA 2 BOX1 ////////////////////////////////

document.querySelector(".button_open_2_1").addEventListener("click", checkIfOpen2_1);

function checkIfOpen2_1() {
    console.log("checkIfOpen2_1");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_02 .button_open_2_1").removeEventListener("click", checkIfOpen2_1);
        //Ny linje
        document.querySelector(".button_open_2_1").classList = ("button_open_2_1");
        document.querySelector(".button_open_2_1").classList.add("on_off");
        document.querySelector(".button_open_2_1").classList.add("top");
        document.querySelector(".button_open_2_1").classList.remove("on");
        hideContent2_1();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_02 .button_open_2_1").removeEventListener("click", checkIfOpen2_1);
        //Ny linje
        document.querySelector(".button_open_2_1").classList = ("button_open_2_1");
        document.querySelector(".button_open_2_1").classList.add("off_on");
        document.querySelector(".button_open_2_1").classList.add("down");
        document.querySelector(".button_open_2_1").classList.remove("off");
        showContent2_1();

    }
}

function showContent2_1() {
    console.log("showContent2_1");

    document.querySelector(".button_open_2_1").removeEventListener("click", showContent2_1);

    document.querySelector(".hidden_content_2_1").classList.remove("hide");
    document.querySelector(".button_open_2_1").addEventListener("click", checkIfOpen2_1);

}

function hideContent2_1() {
    console.log("hideContent2_1");

    document.querySelector(".button_open_2_1").removeEventListener("click", hideContent2_1);
    document.querySelector(".hidden_content_2_1").classList.add("hide");
    document.querySelector(".button_open_2_1").addEventListener("click", checkIfOpen2_1);


}


/////////HER STARTER TEMA FOLD UD - TEMA 2 BOX 2 ////////////////////////////////

document.querySelector(".button_open_2_2").addEventListener("click", checkIfOpen2_2);

function checkIfOpen2_2() {
    console.log("checkIfOpen2_2");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_02 .button_open_2_2").removeEventListener("click", checkIfOpen2_2);
        //Ny linje
        document.querySelector(".button_open_2_2").classList = ("button_open_2_2");
        document.querySelector(".button_open_2_2").classList.add("on_off");
        document.querySelector(".button_open_2_2").classList.add("top");
        document.querySelector(".button_open_2_2").classList.remove("on");
        hideContent2_2();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_02 .button_open_2_2").removeEventListener("click", checkIfOpen2_2);
        //Ny linje
        document.querySelector(".button_open_2_2").classList = ("button_open_2_2");
        document.querySelector(".button_open_2_2").classList.add("off_on");
        document.querySelector(".button_open_2_2").classList.add("down");
        document.querySelector(".button_open_2_2").classList.remove("off");
        showContent2_2();

    }
}

function showContent2_2() {
    console.log("showContent2_2");

    document.querySelector(".button_open_2_2").removeEventListener("click", showContent2_2);

    document.querySelector(".hidden_content_2_2").classList.remove("hide");
    document.querySelector(".button_open_2_2").addEventListener("click", checkIfOpen2_2);

}

function hideContent2_2() {
    console.log("hideContent2_2");

    document.querySelector(".button_open_2_2").removeEventListener("click", hideContent2_2);
    document.querySelector(".hidden_content_2_2").classList.add("hide");
    document.querySelector(".button_open_2_2").addEventListener("click", checkIfOpen2_2);


}

/////////HER STARTER TEMA FOLD UD - TEMA 2 BOX 3 ////////////////////////////////

document.querySelector(".button_open_2_3").addEventListener("click", checkIfOpen2_3);

function checkIfOpen2_3() {
    console.log("checkIfOpen2_3");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_02 .button_open_2_3").removeEventListener("click", checkIfOpen2_3);
        //Ny linje
        document.querySelector(".button_open_2_3").classList = ("button_open_2_3");
        document.querySelector(".button_open_2_3").classList.add("on_off");
        document.querySelector(".button_open_2_3").classList.add("top");
        document.querySelector(".button_open_2_3").classList.remove("on");
        hideContent2_3();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_02 .button_open_2_3").removeEventListener("click", checkIfOpen2_3);
        //Ny linje
        document.querySelector(".button_open_2_3").classList = ("button_open_2_3");
        document.querySelector(".button_open_2_3").classList.add("off_on");
        document.querySelector(".button_open_2_3").classList.add("down");
        document.querySelector(".button_open_2_3").classList.remove("off");
        showContent2_3();

    }
}

function showContent2_3() {
    console.log("showContent2_3");

    document.querySelector(".button_open_2_3").removeEventListener("click", showContent2_3);

    document.querySelector(".hidden_content_2_3").classList.remove("hide");
    document.querySelector(".button_open_2_3").addEventListener("click", checkIfOpen2_3);

}

function hideContent2_3() {
    console.log("hideContent2_3");

    document.querySelector(".button_open_2_3").removeEventListener("click", hideContent2_3);
    document.querySelector(".hidden_content_2_3").classList.add("hide");
    document.querySelector(".button_open_2_3").addEventListener("click", checkIfOpen2_3);


}

/////////HER STARTER TEMA FOLD UD - TEMA 3 BOX 1 ////////////////////////////////

document.querySelector(".button_open_3_1").addEventListener("click", checkIfOpen3_1);

function checkIfOpen3_1() {
    console.log("checkIfOpen3_1");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_03 .button_open_3_1").removeEventListener("click", checkIfOpen3_1);
        //Ny linje
        document.querySelector(".button_open_3_1").classList = ("button_open_3_1");
        document.querySelector(".button_open_3_1").classList.add("on_off");
        document.querySelector(".button_open_3_1").classList.add("top");
        document.querySelector(".button_open_3_1").classList.remove("on");
        hideContent3_1();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_03 .button_open_3_1").removeEventListener("click", checkIfOpen3_1);
        //Ny linje
        document.querySelector(".button_open_3_1").classList = ("button_open_3_1");
        document.querySelector(".button_open_3_1").classList.add("off_on");
        document.querySelector(".button_open_3_1").classList.add("down");
        document.querySelector(".button_open_3_1").classList.remove("off");
        showContent3_1();

    }
}

function showContent3_1() {
    console.log("showContent3_1");

    document.querySelector(".button_open_3_1").removeEventListener("click", showContent3_1);

    document.querySelector(".hidden_content_3_1").classList.remove("hide");
    document.querySelector(".button_open_3_1").addEventListener("click", checkIfOpen3_1);

}

function hideContent3_1() {
    console.log("hideContent3_1");

    document.querySelector(".button_open_3_1").removeEventListener("click", hideContent3_1);
    document.querySelector(".hidden_content_3_1").classList.add("hide");
    document.querySelector(".button_open_3_1").addEventListener("click", checkIfOpen3_1);


}

/////////HER STARTER TEMA FOLD UD - TEMA 3 BOX 2 ////////////////////////////////

document.querySelector(".button_open_3_2").addEventListener("click", checkIfOpen3_2);

function checkIfOpen3_2() {
    console.log("checkIfOpen3_2");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_03 .button_open_3_2").removeEventListener("click", checkIfOpen3_2);
        //Ny linje
        document.querySelector(".button_open_3_2").classList = ("button_open_3_2");
        document.querySelector(".button_open_3_2").classList.add("on_off");
        document.querySelector(".button_open_3_2").classList.add("top");
        document.querySelector(".button_open_3_2").classList.remove("on");
        hideContent3_2();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_03 .button_open_3_2").removeEventListener("click", checkIfOpen3_2);
        //Ny linje
        document.querySelector(".button_open_3_2").classList = ("button_open_3_2");
        document.querySelector(".button_open_3_2").classList.add("off_on");
        document.querySelector(".button_open_3_2").classList.add("down");
        document.querySelector(".button_open_3_2").classList.remove("off");
        showContent3_2();

    }
}

function showContent3_2() {
    console.log("showContent3_2");

    document.querySelector(".button_open_3_2").removeEventListener("click", showContent3_2);

    document.querySelector(".hidden_content_3_2").classList.remove("hide");
    document.querySelector(".button_open_3_2").addEventListener("click", checkIfOpen3_2);

}

function hideContent3_2() {
    console.log("hideContent3_2");

    document.querySelector(".button_open_3_2").removeEventListener("click", hideContent3_2);
    document.querySelector(".hidden_content_3_2").classList.add("hide");
    document.querySelector(".button_open_3_2").addEventListener("click", checkIfOpen3_2);


}

/////////HER STARTER TEMA FOLD UD - TEMA 3 BOX 3 ////////////////////////////////

document.querySelector(".button_open_3_3").addEventListener("click", checkIfOpen3_3);

function checkIfOpen3_3() {
    console.log("checkIfOpen3_3");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_03 .button_open_3_3").removeEventListener("click", checkIfOpen3_3);
        //Ny linje
        document.querySelector(".button_open_3_3").classList = ("button_open_3_3");
        document.querySelector(".button_open_3_3").classList.add("on_off");
        document.querySelector(".button_open_3_3").classList.add("top");
        document.querySelector(".button_open_3_3").classList.remove("on");
        hideContent3_3();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_03 .button_open_3_3").removeEventListener("click", checkIfOpen3_3);
        //Ny linje
        document.querySelector(".button_open_3_3").classList = ("button_open_3_3");
        document.querySelector(".button_open_3_3").classList.add("off_on");
        document.querySelector(".button_open_3_3").classList.add("down");
        document.querySelector(".button_open_3_3").classList.remove("off");
        showContent3_3();

    }
}

function showContent3_3() {
    console.log("showContent3_3");

    document.querySelector(".button_open_3_3").removeEventListener("click", showContent3_3);

    document.querySelector(".hidden_content_3_3").classList.remove("hide");
    document.querySelector(".button_open_3_3").addEventListener("click", checkIfOpen3_3);

}

function hideContent3_3() {
    console.log("hideContent3_3");

    document.querySelector(".button_open_3_3").removeEventListener("click", hideContent3_3);
    document.querySelector(".hidden_content_3_3").classList.add("hide");
    document.querySelector(".button_open_3_3").addEventListener("click", checkIfOpen3_3);


}

/////////HER STARTER TEMA FOLD UD - TEMA 4 BOX 1 ////////////////////////////////

document.querySelector(".button_open_4_1").addEventListener("click", checkIfOpen4_1);

function checkIfOpen4_1() {
    console.log("checkIfOpen4_1");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_04 .button_open_4_1").removeEventListener("click", checkIfOpen4_1);
        //Ny linje
        document.querySelector(".button_open_4_1").classList = ("button_open_4_1");
        document.querySelector(".button_open_4_1").classList.add("on_off");
        document.querySelector(".button_open_4_1").classList.add("top");
        document.querySelector(".button_open_4_1").classList.remove("on");
        hideContent4_1();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_04 .button_open_4_1").removeEventListener("click", checkIfOpen4_1);
        //Ny linje
        document.querySelector(".button_open_4_1").classList = ("button_open_4_1");
        document.querySelector(".button_open_4_1").classList.add("off_on");
        document.querySelector(".button_open_4_1").classList.add("down");
        document.querySelector(".button_open_4_1").classList.remove("off");
        showContent4_1();

    }
}

function showContent4_1() {
    console.log("showContent4_1");

    document.querySelector(".button_open_4_1").removeEventListener("click", showContent4_1);

    document.querySelector(".hidden_content_4_1").classList.remove("hide");
    document.querySelector(".button_open_4_1").addEventListener("click", checkIfOpen4_1);

}

function hideContent4_1() {
    console.log("hideContent4_1");

    document.querySelector(".button_open_4_1").removeEventListener("click", hideContent4_1);
    document.querySelector(".hidden_content_4_1").classList.add("hide");
    document.querySelector(".button_open_4_1").addEventListener("click", checkIfOpen4_1);


}

/////////HER STARTER TEMA FOLD UD - TEMA 4 BOX 2 ////////////////////////////////

document.querySelector(".button_open_4_2").addEventListener("click", checkIfOpen4_2);

function checkIfOpen4_2() {
    console.log("checkIfOpen4_2");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_04 .button_open_4_2").removeEventListener("click", checkIfOpen4_2);
        //Ny linje
        document.querySelector(".button_open_4_2").classList = ("button_open_4_2");
        document.querySelector(".button_open_4_2").classList.add("on_off");
        document.querySelector(".button_open_4_2").classList.add("top");
        document.querySelector(".button_open_4_2").classList.remove("on");
        hideContent4_2();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_04 .button_open_4_2").removeEventListener("click", checkIfOpen4_2);
        //Ny linje
        document.querySelector(".button_open_4_2").classList = ("button_open_4_2");
        document.querySelector(".button_open_4_2").classList.add("off_on");
        document.querySelector(".button_open_4_2").classList.add("down");
        document.querySelector(".button_open_4_2").classList.remove("off");
        showContent4_2();

    }
}

function showContent4_2() {
    console.log("showContent4_2");

    document.querySelector(".button_open_4_2").removeEventListener("click", showContent4_2);

    document.querySelector(".hidden_content_4_2").classList.remove("hide");
    document.querySelector(".button_open_4_2").addEventListener("click", checkIfOpen4_2);

}

function hideContent4_2() {
    console.log("hideContent4_2");

    document.querySelector(".button_open_4_2").removeEventListener("click", hideContent4_2);
    document.querySelector(".hidden_content_4_2").classList.add("hide");
    document.querySelector(".button_open_4_2").addEventListener("click", checkIfOpen4_2);


}

/////////HER STARTER TEMA FOLD UD - TEMA 4 BOX 3 ////////////////////////////////

document.querySelector(".button_open_4_3").addEventListener("click", checkIfOpen4_3);

function checkIfOpen4_3() {
    console.log("checkIfOpen4_3");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_04 .button_open_4_3").removeEventListener("click", checkIfOpen4_3);
        //Ny linje
        document.querySelector(".button_open_4_3").classList = ("button_open_4_3");
        document.querySelector(".button_open_4_3").classList.add("on_off");
        document.querySelector(".button_open_4_3").classList.add("top");
        document.querySelector(".button_open_4_3").classList.remove("on");
        hideContent4_3();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_04 .button_open_4_3").removeEventListener("click", checkIfOpen4_3);
        //Ny linje
        document.querySelector(".button_open_4_3").classList = ("button_open_4_3");
        document.querySelector(".button_open_4_3").classList.add("off_on");
        document.querySelector(".button_open_4_3").classList.add("down");
        document.querySelector(".button_open_4_3").classList.remove("off");
        showContent4_3();

    }
}

function showContent4_3() {
    console.log("showContent4_3");

    document.querySelector(".button_open_4_3").removeEventListener("click", showContent4_3);

    document.querySelector(".hidden_content_4_3").classList.remove("hide");
    document.querySelector(".button_open_4_3").addEventListener("click", checkIfOpen4_3);

}

function hideContent4_3() {
    console.log("hideContent4_3");

    document.querySelector(".button_open_4_3").removeEventListener("click", hideContent4_3);
    document.querySelector(".hidden_content_4_3").classList.add("hide");
    document.querySelector(".button_open_4_3").addEventListener("click", checkIfOpen4_3);


}

/////////HER STARTER TEMA FOLD UD - TEMA 4 BOX 4 ////////////////////////////////

document.querySelector(".button_open_4_4").addEventListener("click", checkIfOpen4_4);

function checkIfOpen4_4() {
    console.log("checkIfOpen4_4");

    if (boxShow == false) {
        boxShow = true;
        console.log("luk for box");
        document.querySelector("#tema_04 .button_open_4_4").removeEventListener("click", checkIfOpen4_4);
        //Ny linje
        document.querySelector(".button_open_4_4").classList = ("button_open_4_4");
        document.querySelector(".button_open_4_4").classList.add("on_off");
        document.querySelector(".button_open_4_4").classList.add("top");
        document.querySelector(".button_open_4_4").classList.remove("on");
        hideContent4_4();

    } else {
        boxShow = false;
        console.log("åben for box");
        document.querySelector("#tema_04 .button_open_4_4").removeEventListener("click", checkIfOpen4_4);
        //Ny linje
        document.querySelector(".button_open_4_4").classList = ("button_open_4_4");
        document.querySelector(".button_open_4_4").classList.add("off_on");
        document.querySelector(".button_open_4_4").classList.add("down");
        document.querySelector(".button_open_4_4").classList.remove("off");
        showContent4_4();

    }
}

function showContent4_4() {
    console.log("showContent4_4");

    document.querySelector(".button_open_4_4").removeEventListener("click", showContent4_4);

    document.querySelector(".hidden_content_4_4").classList.remove("hide");
    document.querySelector(".button_open_4_4").addEventListener("click", checkIfOpen4_4);

}

function hideContent4_4() {
    console.log("hideContent4_4");

    document.querySelector(".button_open_4_4").removeEventListener("click", hideContent4_4);
    document.querySelector(".hidden_content_4_4").classList.add("hide");
    document.querySelector(".button_open_4_4").addEventListener("click", checkIfOpen4_4);


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
