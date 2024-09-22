"use strict";

var formObj = {
  name: {
    parentSelector: ".form-username",
    regEx: /^[A-Za-z ]{3,20}$/,
    errorMessage: "Username is mandatory to fill correctly",
    isErrorShown: false,
    tag: "input",
    placeholder: "Enter your name",
    label: "name"
  },
  message: {
    parentSelector: ".form-message",
    regEx: /^[\s\S]{5,}$/,
    errorMessage: "Message must be at least 5 characters long",
    tag: "textarea",
    placeholder: "Enter your message",
    label: "message"
  },
  phone: {
    parentSelector: ".form-phone",
    regEx: /^\+380\d{9}$/,
    errorMessage: "Phone is mandatory to fill correctly",
    isErrorShown: false,
    tag: "input",
    placeholder: "Enter phone number",
    label: "Phone"
  },
  email: {
    parentSelector: ".form-email",
    regEx: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
    errorMessage: "Email is mandatory to fill correctly",
    isErrorShown: false,
    tag: "input",
    placeholder: "Email is required",
    label: "email"
  }
};

function createElement(tagname, attributes, content, parentElement, handlers) {
  var element = document.createElement(tagname);

  for (var key in attributes) {
    var attribute = key === "classname" ? "class" : key;
    element.setAttribute(attribute, attributes[key]);
  }

  element.textContent = content;

  for (var eventType in handlers) {
    element.addEventListener(eventType, handlers[eventType]);
  }

  parentElement.appendChild(element);
  return element;
}

function showForm() {
  var parent = document.querySelector("main");
  var formElement = document.createElement("form");
  var titleElement = document.createElement("h1");
  titleElement.textContent = "We would like to help you";
  formElement.appendChild(titleElement);

  var _loop = function _loop(elementname) {
    var container = createElement("p", {
      classname: formObj[elementname].parentSelector.substring(1)
    }, formObj[elementname].label, formElement);
    var elementAttributes = {
      name: elementname
    };

    if (formObj[elementname].tag === "input" || formObj[elementname].tag === "textarea") {
      elementAttributes.placeholder = formObj[elementname].placeholder;
    }

    var element = createElement(formObj[elementname].tag, elementAttributes, null, container);

    if (formObj[elementname].tag === "select") {
      formObj[elementname].options.forEach(function (option) {
        createElement("option", {
          value: option.value
        }, option.text, element);
      });
    }

    if (elementname === "message") {
      var subTitleElement = document.createElement("h2");
      subTitleElement.textContent = "How to answer you?";
      formElement.appendChild(subTitleElement);
    }
  };

  for (var elementname in formObj) {
    _loop(elementname);
  }

  createElement("input", {
    type: "button",
    value: "Send"
  }, null, formElement, {
    click: validateForm
  });
  parent.appendChild(formElement);
}

function validateForm() {
  var form = document.forms[0].elements;
  var isFormValid = true;

  for (var element in formObj) {
    var currentValue = form[element].value;

    if (!currentValue || !formObj[element].regEx.test(currentValue)) {
      var errorElement = document.createElement("span");
      errorElement.classList.add("error");
      errorElement.textContent = formObj[element].errorMessage;

      if (!formObj[element].isErrorShown) {
        var parent = document.querySelector(formObj[element].parentSelector);
        parent.appendChild(errorElement);
        formObj[element].isErrorShown = true;
      }

      isFormValid = false;
    } else {
      var _errorElement = document.querySelector("".concat(formObj[element].parentSelector, " span.error"));

      if (_errorElement) {
        _errorElement.remove();

        formObj[element].isErrorShown = false;
      }
    }
  }

  if (isFormValid) {
    console.log("Form Data:");

    for (var _element in formObj) {
      console.log("".concat(formObj[_element].label, ": ").concat(form[_element].value));
    }
  }
}

showForm();