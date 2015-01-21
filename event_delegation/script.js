(function() {

    var mouseHandler = function(event) {
        var target = eventsUtility.getTarget(event),
            classData = target.getAttribute("data-body-class");

        if (classData) {
            eventsUtility.preventDefault(event);

            if (event.type === "click") {
                document.body.className = "";
            } else {
                document.body.className = classData;
            }
        }
    };

    // using event bubbling
    // event delegation consumes less memory, but makes your code less readable
    // more flexibility, but also more complex method
    eventsUtility.addEvent(document, "click", mouseHandler);
    eventsUtility.addEvent(document, "mouseover", mouseHandler);

}());
