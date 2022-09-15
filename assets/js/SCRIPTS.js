var container = document.getElementById("shapecontainer");
var screen = document.getElementById("screen");
var bttn = document.getElementById("buttn");
var bttnstate = 0;
var imgpth 



function toggleMobileMenu(menu) { 
    menu.classList.toggle('open');
};

function loadimg(toload) {

    if (toload == 00) {
        screen.src = "images/assets/crt_intro.png";
        bttn.src = "images/icons/fab_off.png"
        bttnstate = 0
    };

    if (toload == 01) {
        screen.src = "images/assets/crt_01.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 02) {
        screen.src = "images/assets/crt_02.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 03) {
        screen.src = "images/assets/crt_03.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 04) {
        screen.src = "images/assets/crt_04.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 05) {
        screen.src = "images/assets/crt_05.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 06) {
        screen.src = "images/assets/crt_06.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 07) {
        screen.src = "images/assets/crt_07.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 08) {
        screen.src = "images/assets/crt_08.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 09) {
        screen.src = "images/assets/crt_09.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 10) {
        screen.src = "images/assets/crt_10.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == 11) {
        screen.src = "images/assets/crt_11.png";
        bttn.src = "images/icons/fab_on.png"
        bttnstate = 1
    };

    if (toload == "buttn" && bttnstate == 1) {
        screen.src = "images/assets/CRT_INST.png"
        bttn.src = "images/icons/fab_off.png"
        bttnstate = 0;
    }



}