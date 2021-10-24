/*

//ElementById
let element;

element = document.getElementById("todo-form");

//ElementByClassName
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");

//ElementByTagName
element = document.getElementsByTagName("li");

//Query Selector
element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");
element = document.querySelectorAll(".list-group-item");


element.forEach(function(el) {
    console.log(el);
})


// console.log(element);

*/

// const element = document.querySelector("#clear-todos");

//Elemets Specifications

/*
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
*/

//Changing Style & Element Specifications
/*
element.className = "btn btn-primary";
element.style.color = "yellow";
element.style.marginlefy = "20px";
element.href = "https://google.com/"
element.target = "_blank";

element.textContent="Sil";
element.innerHTML="<span style = 'color:green; font-weight:bold;'>Sil</span>";
*/

/*
const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(el){
    el.style.color = "red";
    el.style.background = "#eee";

})
*/

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el){
    el.style.color = "red";
    el.style.background = "#eee";
})



console.log(element2);


// console.log(element.style);






