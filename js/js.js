/*
 * fil: js.js
 * purpose: introdction to jQuery
 */

/** JS er vigtigt for UX da den brugeren mere engageret samt opfodre til interaktion**/ 

console.log('file: js/js.js loaded'); //console.log er en funktion der bruges til at udskrive en hver form for variabler(img,audio osv), der er defineret før i den eller til bare at udskrive enhver meddelelse , der skal vises til brugeren.

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");


// nede stående funktion er taget fra Webdok( scroll funktion i forhold til navbar), men bruges ikke til noget. Derfor kan den også slettes. 

});

$
    (window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    })

/**
 * Audio controls (gør det muligt at gøre det i en funktion i stedet for  2)
 **/
var $audioIconPhilip = $("#audioIconPhilip");
var audioPhilip = $("#audioPhilip").get(0); /* get(0) henter den følgende funktion i JavaScript, frem for i JQuery, det gør vi for at hente det specifikke element, */

$audioIconPhilip.on('click', function () {
    if (audioPhilip.paused) {     //Brug af if til at angive en blok, der skal udføres hvis en specificeret betingelse er sand (vi bruger den til at starte audio)
        audioPhilip.play();
    } else {                      //Brug af else til at specificere en blok kode der skal udføres hvis den sammen betingelse er falsk, vi bruger den til at pause Audio
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
var slideIndex = 1; // Var= variable, value 1 = første billede
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) { // n = nuværende billede
    showSlides(slideIndex += n); // tilføjer en værdi til n
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); //getelementbyclassname betyder du henter den class der hedder myslides
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1 // vis første billede
    }
    if (n < 1) {
        slideIndex = slides.length // vis næste billede i rækken
    }
    for (i = 0; i < slides.length; i++) { // laver en endeløs loop gennem det fulde antal af billeder, start forfra når det er nået
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // laver en endeløs loop gennem det fulde antal af prikker, start forfra
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block"; // skjuler andre billeder som ikke er billede 1
    dots[slideIndex - 1].className += " active"; // klikker man videre fra 1. billede bliver en ny dot aktiv
}