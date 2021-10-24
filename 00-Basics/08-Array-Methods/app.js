let value;

const numbers = [10,23,34,44,45,5,66,78];

const numbers2 = new Array(1,2,3,4,5,6,7,8,9,0);

const langs= ["Python", "C++", "Java","Kotlin"];
const a= ["Greetings!", "22", null, undefined, 3.14];


value = numbers.length;

value = numbers[0];
value = numbers[1];
value = numbers[numbers.length -1];

numbers[2] = 1000;
value = numbers;

//Index of the first value.
value=numbers.indexOf(1000);

//Append new value to the end of array.
numbers.push(2000);
value = numbers;

//Append new value to the start of array.
numbers.unshift(3000);
value = numbers;

//Remove last value to the start of array.
numbers.pop();
value = numbers;

//Remove first value to the start of array.
numbers.shift();
value = numbers;

//Remove value from array and also appends new value in deleted place.
numbers.splice(0,3,999);
value = numbers;

//Reverse the value in array.
numbers.reverse();
value = numbers;

//Sorts an array in place.
numbers.sort();
value = numbers;

//Sort func for stable sorting method.
numbers.sort(function(x,y){
    return x-y;
});
value = numbers;

numbers.sort(function(x,y){
    return y-x;
});
value = numbers;
console.log(value);