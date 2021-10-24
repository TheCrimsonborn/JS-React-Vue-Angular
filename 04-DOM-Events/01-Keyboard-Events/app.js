//Keyboard Events

//KeyPress
/*
document.addEventListener("keypress",run);

function run(e){
    console.log(e.which);
    console.log("Hey!")
}
*/

//KeyDown
/*
document.addEventListener("keydown",run);

function run(e){
    // console.log(e.which);
    console.log(e.key);
}
*/

//KeyUp
/*
document.addEventListener("keyup",run);

function run(e){
    // console.log(e.which);
    console.log(e.key);
}
*/
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",updateText);
function updateText(e){
    header.textContent = e.target.value; 
}






