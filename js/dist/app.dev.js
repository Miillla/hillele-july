"use strict";

var modal = document.getElementById("modal");
var openModalBtns = document.getElementById("openModalBtn");
var closeModalBtns = document.getElementById("closeModalBtn");
openModalBtns.addEventListener("click", function () {
  modal.classList.remove("hidden");
});
closeModalBtns.addEventListener("click", function () {
  modal.classList.add("hidden");
});
console.log(openModalBtns, closeModalBtns, modal);