# Eksamensprojekt-2.Semester

![logo.png](images/logo.png)

Her har vi kodet en digital løsning til Café Parasollen.


Denne repository indeholder:
* HTML:5 til forside og undersider
* CSS styling til hver HTML:5
* Javascript og JQuery
* Images og audio


Her er et eksempel på kode:

 
 ~~~
 mapboxgl.accessToken = 'pk.eyJ1IjoiamVubnltYWUiLCJhIjoiY2tmcWtlbGNtMGJ0NTJ3bzB2ODM2NWl3biJ9.OoNBfHTXEtINPw6pee5DVg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jennymae/ckijeabhc01mm17nqpevb7wna', // style URL
    center: [10.165552, 56.128976], // starting position [lng, lat]
    zoom: 15 // starting zoom
});
 ~~~

Eksemplet viser opsætningen på API'en mapbox, der på hjemmesiden fremviser lokationen på Café Parasollen.
