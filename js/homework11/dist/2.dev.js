"use strict";

var divCont = document.getElementById("conteiner");
var btn = document.querySelector("input[type='button']");
btn.addEventListener("click", function () {
  divCont.classList.toggle("color-toggle");
});