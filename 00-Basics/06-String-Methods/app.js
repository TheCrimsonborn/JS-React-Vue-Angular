let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java,Python,C++";

value = firstName + " " + lastName;

value = "John";
value += " Doe";

value = firstName.length;

value = firstName.concat(" ",lastName," ", "Jazz")
value = firstName.toLowerCase();
value = firstName.toUpperCase();
value = firstName[0];
value = firstName[firstName.length-1];

value = firstName.indexOf("L");

value = firstName.charAt(0);

value = langs.split(",");

value = langs.replace("Python","Ruby");

value = langs.includes("Java");





console.log(value);
