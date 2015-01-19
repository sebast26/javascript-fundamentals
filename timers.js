(function() {

    var speed = 500,
        i = 0;
        doSomething = function() {
            console.log("doSomething() executed " + (i + 1) + " times");
            i++;
            if (i > 9) {
                clearInterval(timer);
            }
        };

    var timer = setInterval(doSomething, speed);

}());
