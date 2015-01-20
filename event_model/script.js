(function() {

    var buttons = document.getElementsByTagName("button"),
        buttonClicked = function(event) {
            // not the best way of doing it!
            var className = this.innerHTML.toLowerCase();
            document.body.className = className;

            alert(event.type);
            alert(event.target);
            event.preventDefault();
        };

    for (var i = 0, len = buttons.length; i < len; i = i + 1) {

        // old method
        /*buttons[i].onclick = function() {
            var className = this.innerHTML.toLowerCase();
            document.body.className = className;
        };*/

        buttons[i].addEventListener("click", buttonClicked, false);
        buttons[i].addEventListener("click", function() { alert("hi"); }, false);

        // removeEventListener requires exactly this same parameters (function objects) passed
        //buttons[i].removeEventListener("click", buttonClicked, false);
    }

}());
