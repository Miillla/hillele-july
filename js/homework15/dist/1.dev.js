"use strict";

function reloadPage() {
  localStorage.setItem("firstLoad", "true");
}

function defaultTodos() {
  if (localStorage.getItem("firstLoad") === null) {
    localStorage.setItem("todo-item", JSON.stringify([{
      text: "text",
      completed: false
    }, {
      text: "text",
      completed: false
    }]));
    reloadPage();
  }
}

function getTodoLists() {
  return JSON.parse(localStorage.getItem("todo-item")) || [];
}

function createTodoItem(todo, index) {
  return "<li class=\"todo-item ".concat(todo.completed ? "completed" : "", "\" data-index=\"").concat(index, "\">\n            <input type=\"checkbox\" ").concat(todo.completed ? "checked" : "", " onchange=\"toggleComp(").concat(index, ", this)\" />\n            <span class=\"todo-item__description\">").concat(todo.text, "</span>\n            <button class=\"todo-item__delete\" onclick=\"removeTodo(").concat(index, ")\">Delete</button>\n          </li>");
}

function createTodoList(todos) {
  var parent = document.querySelector(".js--todos-wrapper");
  parent.innerHTML = "";
  todos.forEach(function (todo, index) {
    parent.innerHTML += createTodoItem(todo, index);
  });
}

function showLists() {
  var lists = getTodoLists();
  createTodoList(lists);
}

document.querySelector(".form__btn").addEventListener("click", function (e) {
  e.preventDefault();
  var input = document.querySelector(".form__input");
  var text = input.value.trim();
  if (text === "") return;
  var todos = getTodoLists();
  todos.push({
    text: text,
    completed: false
  });
  localStorage.setItem("todo-item", JSON.stringify(todos));
  input.value = "";
  showLists();
});

function toggleComp(index, checkbox) {
  var todos = getTodoLists();
  todos[index].completed = checkbox.checked;
  localStorage.setItem("todo-item", JSON.stringify(todos));
  var todoItem = checkbox.closest(".todo-item");
  todoItem.classList.toggle("completed", checkbox.checked);
}

function removeTodo(index) {
  var todos = getTodoLists();
  todos.splice(index, 1);
  localStorage.setItem("todo-item", JSON.stringify(todos));
  showLists();
}