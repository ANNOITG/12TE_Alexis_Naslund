/// <reference path="../Scripts/jquery-ui-1.8.20.min.js" />

$(document).ready(function() {
    $(document).scroll(function() {
        checkOffset();
    });

    function checkOffset() {
        if ($('#social-float').offset().top + $('#social-float').height() >= $('#footer').offset().top - 10)
            $('#social-float').css('position', 'fixed');

        if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
            $('#social-float').css('position', 'absolute'); // restore when you scroll up
    }



});