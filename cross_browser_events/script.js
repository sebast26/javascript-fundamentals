(function() {

    var links = document.getElementsByTagName("a"),
        linksClicked = function(event) {
            var className = eventsUtility.getTarget(event).innerHTML.toLowerCase();

            eventsUtility.preventDefault(event);

            document.body.className = className;
        };

    for (var i = 0, len = links.length; i < len; i = i + 1) {
        eventsUtility.addEvent(links[i], "click", linksClicked);
    }

}());

