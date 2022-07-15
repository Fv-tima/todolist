var button = document.getElementById("addTodos");
var todoContainer = document.getElementById("todoContainer");
button.addEventListener("click", addItem);
function addItem() {
  var newItem = document.createElement("li");
  newItem.innerHTML = input.value;
  todoContainer.appendChild(newItem);
  input.value = "";
  newItem.addEventListener("click", lineThrough);
  function lineThrough() {
    newItem.style.textDecoration = "line-through";
  }
  newItem.addEventListener("dblclick", removeItem);
  function removeItem() {
    todoContainer.removeChild(newItem);
  }
}
