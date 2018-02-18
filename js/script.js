/**
 * Created by kroel on 18.01.2017.
 */
function __init() {
    document.body.className = '';

    // jQuery smooth scrolling to every anchor link
    $(document).ready(function(){
        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
}


$( window ).scroll(function() {
    var deltaY = $(window).scrollTop();
    //add some space
    deltaY -= 500;
    if(deltaY > $("code.typer").scrollTop()) {
        var skills = document.getElementById('skills');
        if(!skills.classList.contains("active")) {
            //add active class
            skills.classList.add("active");
            var skillLevels = [55, 60, 80, 75, 65, 75, 70];
            var skillbars = document.querySelectorAll('.skills-bar .bar');

            var colors = ["e91e63", "673ab7" , "4caf50", "ff9800", "cddc39", "00bcd4", "ffeb3b"];
            //loop through bars and customize length and color
            for (var i = 0; i < skillLevels.length; i++) {
                skillbars[i].style.width = skillLevels[i] + '%';
                skillbars[i].style.backgroundColor = "#" + colors[i];
            }
        }


        //activate typing
        var typer = document.getElementById("codeTyper");
        if(!typer.classList.contains("activated")) {
            //add active class
            typer.classList.add("activated");
            $(function () {
                $('.typer').typed({
                    strings: ['Let\'s code something',
                        'def printFibonacci(i):\n    a,b,c=0,1,0\n    for j in range(i):\n' +
                        '        c = a + b\n        \a = b\n        b = c\n        print(c)',
                        'window.onload = function () {\n    ' +
                        'var one = 87;\n    var two = 46;\n    var three = "7";\n' +
                        '    var result = one + two + three;\n' +
                        '    alert(result);\n}',
                        '<?php\n' +
                        'if($_SERVER["REQUEST_METHOD"] == "GET"){\n' +
                        '    if(isset($_GET["name"])){\n' +
                        '        $name = $_GET["name"];\n' +
                        '        echo "hello ".$name.", how are you?";\n' +
                        '    }\n}\n?>',
                        'SELECT FirstName, LastName\n' +
                        'from customers c inner join orders o\n' +
                        '    on c.CustomerID = o.CustomerID\n' +
                        'where year(OrderDate) = 2017;',
                        'public static int Factorial(int num) {\n' +
                        '    if (num < 2)\n        return 1;\n\n' +
                        '    return num * Factorial(num -1);',
                        '<header>\n' +
                        '    <h1>HTML is awesome</h1>\n' +
                        '    <p>and works fine with\n    CSS and JavaScript!\n' +
                        '    <p>you can do very nice things\n    in combination with PHP</p>\n' +
                        '</header>',
                        'CSS CODE',

                    ],
                    typeSpeed: 80,
                    cursorChar: '&block;',
                    showCursor: true,
                    contentType: 'text',
                    backDelay: 1000,
                    loop: true
                });
            });
        }
    }
});
