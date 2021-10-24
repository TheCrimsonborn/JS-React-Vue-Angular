let value;


const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardRow;

// Child Nodes
value = todoList.childNodes;
value = todoList.childNodes[0];

//Children - Elements
value = todoList.children;
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "Changed";

value = cardRow.children;
value = cardRow.children[2].children;
value = cardRow.children[2].children[1].textContent = "Also changed.";

value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value = cardRow.parentElement;
value = cardRow.parentElement.parentElement;

//Element Siblings
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

console.log(value);