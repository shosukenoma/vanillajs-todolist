const textField = document.getElementById("textField")
const buttonAdd = document.getElementById("buttonAdd")
const todoList = document.getElementById("todoList")

// If add button clicked
buttonAdd.addEventListener("click", (e) => {
  addNewItem(e);
})

// If enter key pressed down
textField.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    addNewItem(e);
  }
})

const addNewItem = (e) => {
  e.preventDefault();
  // Make sure to defer script.js in html.
  // getElementById is executed before DOM finishes loading.
  // -> Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
  let newItemHTML = `
  <li>
    <p>${textField.value}</p>
    <button type="button" id="buttonDelete">Delete</button>
  </li>
  `;
  todoList.insertAdjacentHTML("beforeend", newItemHTML);
  textField.value = "";
}