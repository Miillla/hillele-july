// const parents = document.querySelector("#parents");
// const taskInput = document.querySelector("#input");
// const addBtn = document.querySelector("#addBtn");

// parents.addEventListener("click", (event) => {
//   if (
//     event.target.tagName === "INPUT" &&
//     event.target.getAttribute("data-action") === "remove"
//   ) {
//     console.log(event.target.parentNode);
//     event.target.parentNode.remove();
//   }
// });
// addBtn.addEventListener("click", (event) => {
//   const newElement = document.createElement("li");
//   newElement.textContent = taskInput.value;
//   taskInput.value = "";

//   const removeBtn = document.createElement("input");
//   removeBtn.setAttribute("type", "button");
//   removeBtn.setAttribute("value", "Remove");
//   removeBtn.setAttribute("data-action", "remove");

//   newElement.appendChild(removeBtn);
//   parents.appendChild(newElement);
// });
