$(document).ready(function () {
    // MODAL
    var $sidenav = $('.sidenav').sidenav();
    $('.tooltipped').tooltip();

    var base_html = `
    <div class="col s6 m4 l3">
        <div class="card bg-color-primary white-text">
            <div class="card-content">
                <div class="card-title center">
                    <a href="{{html_url}}">{{name}}</a>
                </div>
                {{description}}
            </div>
            <div class="card-action center">
                Updated on {{updated_at}}
            </div>
        </div>
    </div>`;

    // Repositories
    var numReposToShow = 4;
    var repoContainer = $('#repo-container');
    $.getJSON("https://api.github.com/users/david-kroell/repos?sort=updated", function (data) {
        for(var i = 0; i < numReposToShow || i < data.lenght; i++){
            var helperDate = new Date(data[i].updated_at);

            data[i].updated_at = helperDate.toLocaleDateString();
            
            var rendered = Mustache.render(base_html, data[i]);

            repoContainer.append(rendered);
        }
    });
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

// smooth scrolling
// - thanks to https://stackoverflow.com/questions/37881988/smooth-scrolling-anchor-with-offset-jquery
$('a[href*="#"]:not([href="#"])').click(function() {
    var offset = -100; // <-- change the value here
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top + offset
            }, 1000);
            return false;
        }
    }
});