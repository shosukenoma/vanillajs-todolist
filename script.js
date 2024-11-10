const newTodoText = document.getElementById("newTodoText")
const newTodoButton = document.getElementById("newTodoButton")
const todoList = document.getElementById("todoList")

newTodoButton.addEventListener("click", (e) => {
  // defer script.js loading in html.
  // getElementById is executed before DOM finishes loading.
  let newTodoItemHTML = `
  <li>
    <p>${newTodoText.value}</p>
    <button type="button" id="deleteTodoButton">Delete</button>
  </li>
  `;

  todoList.insertAdjacentHTML("beforeend", newTodoItemHTML);
  newTodoText.value = "";
})