
// function person(name= "No Data",age= "No Data"){
//     /*
//     if (typeof name == "undefined") name = "No Data";
//     if (typeof age == "undefined") age = "No Data";
//     */
//     console.log(`Name: ${name} | Age: ${age}`);
// }

// person("John Doe",25);
// person("Jane Doe",23);
// person("Peter");
// person();


// function square(x){
//     return x*x;
// }
// function cube(x){
//     return x*x*x;  
// }
// let a = cube(square(12));
// console.log(a);

/* Function Expression */
// const greetings = function(name){
//     console.log(`Hello ${name}`);
// }
// greetings("John");

/* Immediately Invoked Function Expression (IIFE) */
// (function(name){
//     console.log(`Hello ${name}`)
// })("John");

const database = {
    host: "localhost",
    add: function(){
        console.log("Added!");
    },
    get:function(){
        console.log("Got!");
    },
    update:function(id){
        console.log(`ID: ${id} Updated!`);
    },
    delete:function(id){
        console.log(`ID: ${id} Deleted!`);
    }
}

console.log(database.host);
database.add();
database.get();
database.update(2);
database.delete(2);

