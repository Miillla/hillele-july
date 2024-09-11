"use strict";

var btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
  var name = document.getElementById("name").value;
  var message = document.getElementById("textarea").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  if (!name || !message || !phone || !email) {
    return;
  }

  if (message.length < 5) {
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    return;
  }

  console.log(name, message, phone, email);
});
document.getElementById("phone").addEventListener("keydown", function (event) {
  var length = event.target.value.length;

  if (length > 5 && length < 7) {
    return;
  } else if (length > 5 && length === 7) {
    event.target.value += ") ";
    return;
  }
});