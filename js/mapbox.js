/*
 * fil: js.js
 * purpose: introdction to jQuery
 */

/* Library = 3. parts kode
Herunder: parallax, JQuery, Openweathermap og Mapbox
Henter information fra en kilde udefra */

console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");

});

/** mapbox**/

mapboxgl.accessToken = 'pk.eyJ1IjoiamVubnltYWUiLCJhIjoiY2tmcWtlbGNtMGJ0NTJ3bzB2ODM2NWl3biJ9.OoNBfHTXEtINPw6pee5DVg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jennymae/ckijeabhc01mm17nqpevb7wna', // style URL
    center: [10.165552, 56.128976], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

var marker = new mapboxgl.Marker()
.setLngLat([10.165552, 56.128976])
.addTo(map);