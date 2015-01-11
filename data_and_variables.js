var foo1 = 4 + 5 + "7"; // "97"
var foo2 = "7" + 6; // "76"
var foo3 = "7" + 6 + 5; // "765"
var foo4 = 4 + 5 + "7" + 6 + 5; // "9765"

// int to string
var foo5 = 6 + ""; // "6"

// string to int
var foo6 = parseInt("34", 10); // 34
var foo7 = parseInt("34s56", 10); // 34
var foo8 = parseInt("s", 10); // NaN

// string to float
var foo9 = parseFloat("3.14", 10); // 3.14