// let num = 23567;
// let numberStr = num.toString();
// let numArray = numberStr.split("");
// let result2 = numArray.join(" ");
// let number = Number(numArray.join(""));
// let numberStr2 = numberStr.parseInt(numberStr);

// console.log(num, numberStr, numArray, result2, number);

// let firstDigit = prompt("Enter first digit:");
// console.log(typeof firstDigit);
// firstDigit = parseInt(firstDigit);
// let result = firstDigit + 100;
// console.log(result);

// let firstDigit2 = +prompt("Enter first digit:");
// let result3 = firstDigit + 100;
// console.log(result3);

// const isAdmin = confirm("Are you admin?");
// console.log("Result" + isAdmin);

// const currentYear = prompt("Enter current year:");
// const userAge = prompt("Enter your birth year:");
// const yearOfBirth = currentYear - userAge;
// console.log("YOu were born in:" + yearOfBirth);

// const age = 18;
// const isAdult = age >= 18 ? "Adult" : "Not Adult";
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Not Adult");
// }

// % - залишок від діленя (щоб дізначись чи число парне чи непарне 11 % 2 = 1)
// 11 % 2 = 2

let value = 24689;
// let numberStr = value.toString();

// let numArray = numberStr.split("");
// for (let i = 0; i < numArray.length; i++) {
//   console.log(numArray[i], numArray[i] % 3);
// }
let lastDigit = value % 10; // 9
value -= lastDigit; // 24680
value /= 10; // 2468
let fourthDigit = value % 10; // 8
value -= fourthDigit; // 2460
value /= 10; // 246
let thirdDigit = value % 10; // 6
value -= thirdDigit; // 240
value /= 10; // 24
let secondDigit = value % 10; // 4
value -= secondDigit; // 20
value /= 10; // 2
