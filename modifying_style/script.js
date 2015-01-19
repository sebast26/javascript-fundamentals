(function() {

    var divFoo = document.getElementById("foo");

    // not computed styles (only set by element's style OR javascript) AND inefficient
    //divFoo.style.color = "blue";
    //divFoo.style.border = "1px solid black";
    //divFoo.style.backgroundColor = "#ffff00";
    //divFoo.style.padding = "5px";

    divFoo.className = " css-class  css-class2 "; // class names with spaces -> to easilly remove classes
    divFoo.className = divFoo.className.replace(" css-class2 ", "");

    // get computed style

    //new browsers (IE9+)
    //var color = window.getComputedStyle(divFoo, null).getPropertyValue("color");

    //old browsers (IE8)
    //var color = divFoo.currentStyle["color"];

    //both situations (old and new versions)
    var getStyle = function(el, cssProperty) {
        if (typeof getComputedStyle !== "undefined") {
            return window.getComputedStyle(el, null).getPropertyValue(cssProperty);
        } else {
            return el.currentStyle[cssProperty];
        }
    };
    var color = getStyle(divFoo, "color");

    alert(color);

}());