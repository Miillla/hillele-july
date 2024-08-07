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

// let number = prompt("Enter a three-digit number:");

// if (number.length !== 3 || isNaN(number)) {
//   alert("Please enter a valid three-digit number.");
// } else {
//   let [hundreds, tens, units] = number.split("");

//   if (hundreds === tens && tens === units) {
//     alert("All digits are the same.");
//   } else if (hundreds === tens || tens === units || hundreds === units) {
//     alert("Some digits are the same.");
//   } else {
//     alert("All digits are different.");
//   }
// }

// 4.3 homework
let yearBirth = prompt("Введіть свій рік народження:");
if (yearBirth === null) {
  alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
} else {
  alert(`Вам ${2021 - yearBirth} років`);
}

let capital = prompt("Ти живеш у столиці?");
if (capital === null) {
  alert(`Шкода, що Ви не захотіли ввести своє місто`);
} else {
  alert(`Ти живеш у ${capital}`);
}

let city = prompt("Ти живеш у місті?");
if (city === null) {
  alert(`Шкода, що Ви не захотіли ввести своє місто`);
} else {
  alert(`Ти живеш у столиці ${city}`);
}

let favSport = prompt("Введіть улюблений вид спорту?");
if (favSport === null) {
  alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту`);
} else {
  alert(`Твій улюблений вид спорту ${favSport}`);
}

let favSportMan = prompt(
  "Введіть улюбленого спортсмена:Александр Усик, Василь Ломаченко, Сергей Бубка"
);
if (favSportMan === null) {
  alert(`Шкода, що Ви не захотіли свого улюбленого спортсмена`);
} else {
  alert(`Твій улюблений спортсмен ${favSportMan}`);
}

// 4.4 homework

// let numOrSrt = prompt("Enter a number or a string:");
// console.log(typeof numOrSrt);

// switch (true) {
//   case numOrSrt === null:
//     console.log("Ви скасували");
//     break;
//   case numOrSrt.trim() === "":
//     console.log("Empty String");
//     break;
//   case isNaN(+numOrStr):
//     console.log(" number is Ba_NaN");
//     break;
//   default:
//     console.log("number is", numOrStr);
// }
