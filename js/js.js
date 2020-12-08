/*
 * fil: js.js
 * purpose: introdction to jQuery
 */

console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

console.log("jQuery 3.5.1 running. Alert level green.");


}).catch(err => {

console.log('There was an error ...');
});

}); // denne line må ikke slettes
$
(window).on("scroll", function () {
if($(window).scrollTop()){
    $('nav').addClass('black');
}
    else{
        $('nav').removeClass('black');
    }
})

// mapbox

mapboxgl.accessToken = 'pk.eyJ1IjoiamVubnltYWUiLCJhIjoiY2tmcWtlbGNtMGJ0NTJ3bzB2ODM2NWl3biJ9.OoNBfHTXEtINPw6pee5DVg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jennymae/ckigd63ci3tya19rwibl293gy', // style URL
    center: [56.129,10.166], // starting position [lng, lat]
    zoom: 15 // starting zoom
});