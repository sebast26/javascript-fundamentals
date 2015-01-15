(function() {

    var pElements = document.getElementsByTagName("p"), // NodeList - old method
        newPElements = document.querySelectorAll("p");

    for (var i = 0, len = pElements.length; i < len; i++) {
        // alert(pElements[i]);
    }

    // new javascript looking methods
    var firstPElement = document.querySelector("p");

    alert(firstPElement.parentNode.tagName);


    var pInsideDiv = document.querySelector("div p");

    alert(pInsideDiv.parentNode.tagName);


}());