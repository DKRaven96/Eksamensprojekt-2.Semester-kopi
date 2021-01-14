/*
 * fil: js.js
 * purpose: introdction to jQuery
 */

<<<<<<< Updated upstream
/** JS er vigtig for UX da den gør brugeren mere engageret samt opfordre til interaktion**/

console.log('file: js/js.js loaded');
=======
console.log('file: js/js.js loaded'); //console.log er en funktion der bruges til at udskrive en hver form for variabler(img,audio osv), der er defineret før i den eller til bare at udskrive enhver meddelelse , der skal vises til brugeren.
>>>>>>> Stashed changes

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");


// nede stående funktion er taget fra Webdok, men bruges ikke til noget. 
});



/**
 * Audio controls (again, find method to do it in ONE function rather than 2)
 **/
var $audioIconPhilip = $("#audioIconPhilip");
var audioPhilip = $("#audioPhilip").get(0); /* get(0) henter den følgende funktion i JavaScript, frem for i JQuery */

$audioIconPhilip.on('click', function () {
    if (audioPhilip.paused) {     //Brug af if til at angive en blok, der skal udføres hvis en specificeret betingelse er sand
        audioPhilip.play();
    } else {                      //Brug af else til at specificere en blok kode der skal udføres hvis den sammen betingelse er falsk
        audioPhilip.pause();
    }
});

var $audioIconVeyis = $("#audioIconVeyis");
var audioVeyis = $("#audioVeyis").get(0); /* get(0) henter den følgende funktion i JavaScript, frem for i JQuery */

$audioIconVeyis.on('click', function () {
    if (audioVeyis.paused) {
        audioVeyis.play();
    } else {
        audioVeyis.pause();
    }
});

// slideshow menu
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}