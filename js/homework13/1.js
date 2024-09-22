"use strict";

const formObj = {
  name: {
    parentSelector: ".form-username",
    regEx: /^[A-Za-z ]{3,20}$/,
    errorMessage: "Username is mandatory to fill correctly",
    isErrorShown: false,
    tag: "input",
    placeholder: "Enter your name",
    label: "name",
  },
  message: {
    parentSelector: ".form-message",
    regEx: /^[\s\S]{5,}$/,
    errorMessage: "Message must be at least 5 characters long",
    tag: "textarea",
    placeholder: "Enter your message",
    label: "message",
  },
  phone: {
    parentSelector: ".form-phone",
    regEx: /^\+380\d{9}$/,
    errorMessage: "Phone is mandatory to fill correctly",
    isErrorShown: false,
    tag: "input",
    placeholder: "Enter phone number",
    label: "Phone",
  },
  email: {
    parentSelector: ".form-email",
    regEx: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
    errorMessage: "Email is mandatory to fill correctly",
    isErrorShown: false,
    tag: "input",
    placeholder: "Email is required",
    label: "email",
  },
};

function createElement(tagname, attributes, content, parentElement, handlers) {
  const element = document.createElement(tagname);

  for (let key in attributes) {
    const attribute = key === "classname" ? "class" : key;
    element.setAttribute(attribute, attributes[key]);
  }

  element.textContent = content;

  for (let eventType in handlers) {
    element.addEventListener(eventType, handlers[eventType]);
  }

  parentElement.appendChild(element);

  return element;
}

function showForm() {
  const parent = document.querySelector("main");
  const formElement = document.createElement("form");

  const titleElement = document.createElement("h1");
  titleElement.textContent = "We would like to help you";
  formElement.appendChild(titleElement);

  for (let elementname in formObj) {
    const container = createElement(
      "p",
      { classname: formObj[elementname].parentSelector.substring(1) },
      formObj[elementname].label,
      formElement
    );

    const elementAttributes = { name: elementname };

    if (
      formObj[elementname].tag === "input" ||
      formObj[elementname].tag === "textarea"
    ) {
      elementAttributes.placeholder = formObj[elementname].placeholder;
    }

    const element = createElement(
      formObj[elementname].tag,
      elementAttributes,
      null,
      container
    );

    if (formObj[elementname].tag === "select") {
      formObj[elementname].options.forEach((option) => {
        createElement("option", { value: option.value }, option.text, element);
      });
    }
    if (elementname === "message") {
      const subTitleElement = document.createElement("h2");
      subTitleElement.textContent = "How to answer you?";
      formElement.appendChild(subTitleElement);
    }
  }

  createElement("input", { type: "button", value: "Send" }, null, formElement, {
    click: validateForm,
  });

  parent.appendChild(formElement);
}

function validateForm() {
  const form = document.forms[0].elements;
  let isFormValid = true;

  for (let element in formObj) {
    const currentValue = form[element].value;

    if (!currentValue || !formObj[element].regEx.test(currentValue)) {
      const errorElement = document.createElement("span");
      errorElement.classList.add("error");
      errorElement.textContent = formObj[element].errorMessage;

      if (!formObj[element].isErrorShown) {
        const parent = document.querySelector(formObj[element].parentSelector);
        parent.appendChild(errorElement);
        formObj[element].isErrorShown = true;
      }
      isFormValid = false;
    } else {
      const errorElement = document.querySelector(
        `${formObj[element].parentSelector} span.error`
      );
      if (errorElement) {
        errorElement.remove();
        formObj[element].isErrorShown = false;
      }
    }
  }

  if (isFormValid) {
    console.log(`${formObj[element].label}: ${form[element].value}`);
  } else {
    errorElement.textContent = formObj[element].errorMessage;
  }
}

showForm();
