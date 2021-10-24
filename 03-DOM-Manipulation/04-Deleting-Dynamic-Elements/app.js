//Deleting Dynamic Elements

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[3]);


console.log(todoList);