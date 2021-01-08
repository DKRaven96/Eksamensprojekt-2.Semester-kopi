 // A $( document ).ready() block.
 $(document).ready(function () { // kører så snart DOM er klar

     console.log("jQuery 3.5.1 running. Alert level green.");
     $("#kryds").click(function () {
         $('.nav-list').removeClass('open');
         console.log("klik");
     })
$("#burgermenu").click(function () {
         $('.nav-list').addClass('open');
         console.log("klik");
     })
 });
