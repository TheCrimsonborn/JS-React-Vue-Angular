/* Comparison Operators
    ==	equal to
    ===	equal value and equal type
    !=	not equal
    !==	not equal value or not equal type
    >	greater than
    <	less than
    >=	greater than or equal to
    <=	less than or equal to
    ?	ternary operator
*/

/*
console.log(2 == 2);
console.log(2 == "2");
console.log("js" == "java");
console.log(2 === "2");
*/

/*
console.log(2<2);
console.log(2>2);
console.log(2>=2);
console.log(2<=2);
console.log(2 != 4);
console.log(2 != 2);
console.log(2 !== 4);
console.log(2 !== "2");
console.log(2 !== 2);
*/

/* Logical Operators
    &&	logical and
    ||	logical or
    !	logical not
*/

/*
console.log(!(2 != 2));
console.log((4==2) && ("John"=="John"));
console.log((4==2) || ("John"=="John"));
*/

const error = false;

if (error == true){
    console.log("Error!")
}
else {
    console.log("There is a no error!")
    
}
// console.log("Test!")

const user = "janedoe";

if (user==="johndoe"){
    console.log("The user has been found!")
}
else {
    console.log("The user has been not found!")

}
const process = 3;
if (process === 1){
    console.log(`Process: ${process}`);

}
else if (process === 2){
    console.log(`Process: ${process}`);
}
else if (process === 3){
    console.log(`Process: ${process}`);
}
else if (process === 4){
    console.log(`Process: ${process}`);
}
else if (process === 5){
    console.log(`Process: ${process}`);
}
else{
    console.log("The process is out of range!");

}

console.log(process === 3 ? `Process: ${process}`
: process === 2 ? `Process: ${process}`
: "The process is out of range!");

if (process === 3)
console.log(`Process: ${process}`); 
else console.log("The process is out of range!"); 