const parents = document.querySelector("#parents");
const taskInput = document.querySelector("#input");
const addBtn = document.querySelector("#add");

parents.addEventListener("click", (event) => {
  if (
    event.target.tagName === "BUTTON" &&
    event.target.getAttribute("data-action") === "remove"
  ) {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }
});
addBtn.addEventListener("click", (event) => {
  const newElement = document.createElement("li");
  newElement.textContent = taskInput.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("data-action", "remove");

  newElement.appendChild(removeBtn);
  parents.appendChild(newElement);

  taskInput.value = "";
});
