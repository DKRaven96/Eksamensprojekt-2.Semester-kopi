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

/** mapbox**/

mapboxgl.accessToken = 'pk.eyJ1IjoiamVubnltYWUiLCJhIjoiY2tmcWtlbGNtMGJ0NTJ3bzB2ODM2NWl3biJ9.OoNBfHTXEtINPw6pee5DVg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jennymae/ckijeabhc01mm17nqpevb7wna', // style URL
    center: [10.165448, 56.129044], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

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
