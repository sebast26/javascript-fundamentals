var doSomething = function (paramOne, paramTwo, fn) {
    paramOne = paramOne + 3;
    paramOne = paramOne * 8;

    return fn(paramOne, paramTwo);
};

var sum = function(paramOne, paramTwo) {
    return paramOne + paramTwo;
};

var foo = doSomething(2, 2, sum);

var bar = doSomething(2, 3, function(paramOne, paramTwo) {
    return paramOne * paramTwo;
});