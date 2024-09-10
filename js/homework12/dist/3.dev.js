"use strict";

var parents = document.querySelector("#parents");
var taskInput = document.querySelector("#input");
var addBtn = document.querySelector("#add");
parents.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON" && event.target.getAttribute("data-action") === "remove") {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }
});
addBtn.addEventListener("click", function (event) {
  var newElement = document.createElement("li");
  newElement.textContent = taskInput.value;
  var removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("data-action", "remove");
  newElement.appendChild(removeBtn);
  parents.appendChild(newElement);
  taskInput.value = "";
});