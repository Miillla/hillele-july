"use strict";

var parents = document.querySelector("#parents");
var taskInput = document.querySelector("#input");
var addBtn = document.querySelector("#addBtn");
parents.addEventListener("click", function (event) {
  if (event.target.tagName === "INPUT" && event.target.getAttribute("data-action") === "remove") {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }
});
addBtn.addEventListener("click", function (event) {
  var newElement = document.createElement("li");
  newElement.textContent = taskInput.value;
  taskInput.value = "";
  var removeBtn = document.createElement("input");
  removeBtn.setAttribute("type", "button");
  removeBtn.setAttribute("value", "Remove");
  removeBtn.setAttribute("data-action", "remove");
  newElement.appendChild(removeBtn);
  parents.appendChild(newElement);
});