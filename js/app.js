//  3.1 homework

// let firstName = "John";
// let lastName = "Doe";
// let age = 35;
// let job = "Web Developer";

// console.log(firstName, lastName, age, job);

// 3.2 homework

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let age = prompt("Enter your age:");
// let job = prompt("Enter your job:");

// let fullName = `Fullname: ${firstName} ${lastName} ${age} ${job}`;
// console.log(fullName);
// console.log(typeof firstName, typeof lastName, typeof age);

// 3.3 homework

// let value = 24689;
// let lastDigit = value % 10; // 9
// value -= lastDigit; // 24680
// value /= 10; // 2468
// let fourthDigit = value % 10; // 8
// value -= fourthDigit; // 2460
// value /= 10; // 246
// let thirdDigit = value % 10; // 6
// value -= thirdDigit; // 240
// value /= 10; // 24
// let secondDigit = value % 10; // 4
// value -= secondDigit; // 20
// value /= 10; // 2

// 4.1 homework

// let name = prompt("Enter your name:");
// alert(`Hello, ${name}! How are you?`);

// 4.2 homework

let number = prompt("Enter a three-digit number:");

if (number.length !== 3 || isNaN(number)) {
  alert("Please enter a valid three-digit number.");
} else {
  let [hundreds, tens, units] = number.split("");

  if (hundreds === tens && tens === units) {
    alert("All digits are the same.");
  } else if (hundreds === tens || tens === units || hundreds === units) {
    alert("Some digits are the same.");
  } else {
    alert("All digits are different.");
  }
}
