var obj = "This is a string object.",
    length = obj.length;

var index = obj.indexOf("is"), // 2
    index2 = obj.indexOf("is", index + 1), // 5
    index3 = obj.indexOf("this"); // -1

var index4 = obj.lastIndexOf("is"), // 5
    index5 = obj.lastIndexOf("is", index4 - 1); // 2

var stIndex = obj.indexOf("st"), // 10
    substr = obj.substr(stIndex, 6), // "string"
    substring = obj.substring(stIndex, stIndex + 7); // "string"

var newString = obj.replace("object", "value"); // "This is a string value."

