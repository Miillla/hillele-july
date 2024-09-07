"use strict";

var parents = document.querySelector("#parents");
parents.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    alert("\u0412\u0438 \u043A\u043B\u0456\u043A\u043D\u0443\u043B\u0438 \u043D\u0430: ".concat(event.target.textContent));
  }
});