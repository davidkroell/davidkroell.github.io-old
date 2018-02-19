/**
 * Created by kroel on 18.01.2017.
 */
function __init() {
    document.body.className = '';

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'js/particles.json', function() {
        console.log('particles loaded');
    });
}
