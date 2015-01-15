(function() {

    alert(location);

    if (confirm("Do you want to go to google.pl?")) {
        location = "http://google.pl";
    } else {
        alert("You will stay here.");
    }

}());