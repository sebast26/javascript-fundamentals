/*
    The old way of creating objects.
 */
/*var person = new Object();
person.firstName = "Sebastian";
person.lastName = "Gorecki";
person.getFullName = function() {
    return this.firstName + " " + this.lastName;
};*/

/*
    Literal objects.
 */
var person = {
    firstName : "Sebastian",
    lastName : "Gorecki",
    getFullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

alert(person.getFullName());
