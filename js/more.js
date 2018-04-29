$(document).ready(function () {
    // MODAL
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
});

var header = $('header');
var navBg = $('#nav-bg');
var range = 200;

$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 1.1,
        calc = 1 - (scrollTop - offset + range) / range;

    header.css({ 'opacity': calc });
    navBg.css({ 'opacity': 1 - calc });

    if (calc > '1') {
        header.css({ 'opacity': 1 });
        navBg.css({ 'opacity': 0 });
    } else if (calc < '0') {
        header.css({ 'opacity': 0 });
        navBg.css({ 'opacity': 1 });

    }

});
