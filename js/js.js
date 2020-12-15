/*
 * fil: js.js
 * purpose: introdction to jQuery
 */

console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");



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
 * Audio controls (again, find method to do it in ONE function rather than 2)
 **/
var $audioIconPhilip = $("#audioIconPhilip");
var audioPhilip = $("#audioPhilip").get(0); /* get(0) henter den følgende funktion i JavaScript, frem for i JQuery */

$audioIconPhilip.on('click', function () {
    if (audioPhilip.paused) {
        audioPhilip.play();
    } else {
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