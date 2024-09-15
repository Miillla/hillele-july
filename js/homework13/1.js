const btn = document.getElementById("btn");
const form = document.querySelector("#form");
const inputFields = form.getElementsByClassName("form-control");
const phone = document.getElementById("phone");

for (const item of inputFields) {
  item.addEventListener("blur", (event) => {
    validateForm(event);
  });
}
const setError = (element, message) => {
  const errorSection = element.parentElement.querySelector(".error");
  errorSection.innerText = message;
  element.classList.toggle("invalid", false);
  element.classList.toggle("valid", true);
};

const setValid = (element) => {
  const errorSection = element.parentElement.querySelector(".error");
  errorSection.innerText = "";
  element.classList.toggle("invalid", false);
  element.classList.toggle("valid", true);
};

const validateMessage = (message) => {
  message.value.length < 5
    ? setError(message, "Message must be at least 5 characters long")
    : setValid(message);
};

const validateEmail = (email) => {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

  if (email.value === "") {
    setError(email, "Email is required");
  } else if (!email.value.match(regex)) {
    setError(email, "Email is incorrect");
  } else {
    setValid(email);
  }
};

const validatePhone = (phone) => {
  const regex = /^\+380\(\d{2}\)\d{3}-\d{2}-\d{2}$/;

  if (length === 17 && !phone.value.match(phone.value)) {
    setError(phone, "Phone number must follow the format +380(XX)XXX-XX-XX");
  } else {
    setValid(phone);
  }
};
phone.addEventListener("keydown", (event) => {
  const length = event.target.value.length;

  if (length === 7) {
    event.target.value += ") ";
  }
});

const validateName = (name) => {
  name.value === "" ? setError(name, "Name is required") : setValid(name);
};

const validateForm = (event) => {
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

btn.addEventListener("click", (event) => {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (!name || message.length < 5 || !phone || !email) {
    return;
  }

  console.log(name, message, phone, email);
});
