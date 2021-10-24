/*
let myMap = new Map();

const key1 = "John";
const key2 = {a:10,b:20};
const key3 = () => 2;

//Set
myMap.set(key1,"String Value");
myMap.set(key2,"Object Litteral Value");
myMap.set(key3,"Func Value");

//Get
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap.size);
*/

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",5);

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

// for(let [key,value] of cities){
//     console.log(key,value);
// }

// for(let key of cities.keys()){
//     console.log(key);
// }

// for(let value of cities.values()){
//     console.log(value);
// }

// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",5);

const array = Array.from(cities);
console.log(array);

