 // A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");

});
    $("#close").click(function() {
        $('.nav-list').removeClass('open');
    })
