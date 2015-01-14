var foo = [11, "hello", true];
foo.push("a new value");

var names = ["Sebastian", "Ania"],
    names2 = ["Jadzia", "Kuba"];

var people = names.concat(names2);

var joined = people.join(", ");

var reversed = people.reverse();

var sorted = people.sort();

alert(people);
alert(joined);
alert(reversed);
alert(sorted);