let value;

//To String
value = String(123);
value = String(3.14);
value = String(true);
value = String(function(){console.log()});
value = String([1,2,3,4,5]);
value = (10).toString();


//To Number
value = Number("123");
value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("3.14");
value = Number(null);
value = Number(undefined);
value = Number(true);
value = Number(false);
value = Number([1,2,3,4,5]);

// const a = "Hello" + 34;
// const a = "34" + 53;
const a = Number("34") + 53;


console.log(a);
console.log(typeof value);



console.log(value);
console.log(typeof value);
