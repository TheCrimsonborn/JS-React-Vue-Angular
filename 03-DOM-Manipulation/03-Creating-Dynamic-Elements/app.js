//Creating New Element

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newBtn = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];


newBtn.id = "clear-todos";
newBtn.className = "btn btn-danger";
newBtn.href = "https://google.com";
newBtn.target = "_blank";
newBtn.appendChild(document.createTextNode("Clear N Go!"));
cardbody.appendChild(newBtn);

/* newBtn.textContent = "Clear"  //DONT USE THIS METHOD! 
const text = document.createTextNode("Clear N Go!");
cardbody.appendChild(text);
*/
console.log(newBtn);