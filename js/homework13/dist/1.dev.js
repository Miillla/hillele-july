"use strict";

var btn = document.getElementById("btn");
var form = document.querySelector("#form");
var inputFields = form.getElementsByClassName("form-control");
var phone = document.getElementById("phone");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = inputFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
    item.addEventListener("blur", function (event) {
      validateForm(event);
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var setError = function setError(element, message) {
  var errorSection = element.parentElement.querySelector(".error");
  errorSection.innerText = message;
  element.classList.toggle("invalid", false);
  element.classList.toggle("valid", true);
};

var setValid = function setValid(element) {
  var errorSection = element.parentElement.querySelector(".error");
  errorSection.innerText = "";
  element.classList.toggle("invalid", false);
  element.classList.toggle("valid", true);
};

var validateMessage = function validateMessage(message) {
  message.value.length < 5 ? setError(message, "Message must be at least 5 characters long") : setValid(message);
};

var validateEmail = function validateEmail(email) {
  var regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

  if (email.value === "") {
    setError(email, "Email is required");
  } else if (!email.value.match(regex)) {
    setError(email, "Email is incorrect");
  } else {
    setValid(email);
  }
};

var validatePhone = function validatePhone(phone) {
  var regex = /^\+380\(\d{2}\)\d{3}-\d{2}-\d{2}$/;

  if (length === 17 && !phone.value.match(phone.value)) {
    setError(phone, "Phone number must follow the format +380(XX)XXX-XX-XX");
  } else {
    setValid(phone);
  }
};

phone.addEventListener("keydown", function (event) {
  var length = event.target.value.length;

  if (length === 7) {
    event.target.value += ") ";
  }
});

var validateName = function validateName(name) {
  name.value === "" ? setError(name, "Name is required") : setValid(name);
};

var validateForm = function validateForm(event) {
  switch (event.target.id) {
    case "name":
      validateName(event.target);
      break;

    case "message":
      validateMessage(event.target);
      break;

    case "phone":
      validatePhone(event.target);
      break;

    case "email":
      validateEmail(event.target);
      break;

    default:
      alert("Validation error!");
  }
};

btn.addEventListener("click", function (event) {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  if (!name || message.length < 5 || !phone || !email) {
    return;
  }

  console.log(name, message, phone, email);
});