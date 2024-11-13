// Make sure to defer script.js in html.
  // Otherwise getElementById is executed before DOM finishes loading.
  // -> Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
const todoList = document.getElementById("todoList")
const textField = document.getElementById("textField")
const buttonAdd = document.getElementById("buttonAdd")

// === ADD (Click) ===
// If add button clicked
buttonAdd.addEventListener('click', (e) => {
  addNewItem(e);
})

// === ADD (Enter) ===
// If enter key pressed down
textField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addNewItem(e);
  }
})

// === DELETE ===
// USE EVENT DELEGATION. Do not add event listener to each "delete item" button.
document.addEventListener('click', (e) => {
  if (e.target.classList.contains("btn--delete")) {
    todoList.removeChild(e.target.parentNode)
  }
})

// === ADD Helper ===
const addNewItem = (e) => {
  e.preventDefault();

  if (!textField.value.length) {
    alert("You can't add an empty task!")
    return;
  };

  // appendChild version
  const listItem = document.createElement("li")

  const listContent = document.createElement("span");
  listContent.textContent = `${textField.value}`

  const listDeleteButton = document.createElement("button")
  listDeleteButton.setAttribute("type", "button")
  listDeleteButton.setAttribute("class", "btn btn--delete")
  listDeleteButton.textContent = "Delete"

  listItem.appendChild(listContent)
  listItem.appendChild(listDeleteButton)
  todoList.appendChild(listItem)

  textField.value = "";
  console.log(listItem);

  // // insertAdjacentHTML version
  // const newItemHTML = `
  // <li>
  //   <span>${textField.value}</span>
  //   <button type="button" class="btn btn--delete">Delete</button>
  // </li>
  // `;
  // todoList.insertAdjacentHTML("beforeend", newItemHTML);
  // textField.value = "";
}