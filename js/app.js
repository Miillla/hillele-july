// for (let i = 10; i <= 20; i++) {
//   const result = i ** 2;

//   console.log(`${i} * ${i} = ${result}`);
// }

// for (let value = 2; value <= 10; value++) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${value} * ${i} = ${value * i}`);
//   }
// }
//видести в консоль суму лише парних чисел від 30 до 80
// let sum = 0;
// for (let i = 30; i <= 80; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log("result:" + sum);

// function min(a, b) {
//   console.log(a, b);
//   return a < b ? a : b;
// }
// // min(2, 5);
// min(3, -1);
// console.log(min(3, -1));
// min(1, 1);
// min(5, 5);

// function pow(x, n) {
//   return x ** n;

//   //   let result = x;
//   //   for (let i = 1; i < n; i++) {
//   //     result *= x;
//   //     // console.log(result);
//   //   }
//   //   return result;
// }
// let name = pow(8, 2);
// console.log(name);

// const products = ["Iphone", "Samsung Galazy s25", "AR-15"];
// function showProducts() {
//   for (let i = 0; i < products.length; i++)
//     console.log(`Product #${i}:${products[i]}`);
// }

// function getNumericValue(message, min, max) {
//   let value;
//   do {
//     value = parseInt(prompt(message));
//   } while (value < min || value > max || isNaN(value));

//   return value;
// }
// showProducts();
// let productNumber = getNumericValue(
//   "Enter the product number that you wanna buy",
//   0,
//   products.length - 1
// );
// let amount = getNumericValue(
//   "Enter the amount of products you wanna buy",
//   1,
//   100
// );

// const selectProduct = products[productNumber];

// console.log(
//   `You chose product #${productNumber},this is ${selectProduct}.The amount will be ${amount}`
// );

// function getSquare(number) {
//   return number * number;
// }

// console.log(getSquare(5));

// function isEven(number) {
//   return number % 2 === 0;
// }
// console.log(isEven(57));

// //Створи функцію factorial, яка приймає число і повертає його факторіал (добуток всіх чисел від 1 до цього числа).

// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(7));

// //як працюють цикли
// // i = 1: result = 1 * 1 = 1
// // i = 2: result = 1 * 2 = 2
// // i = 3: result = 2 * 3 = 6
// // i = 4: result = 6 * 4 = 24
// // i = 5: result = 24 * 5 = 120
// // i = 6: result = 120 * 6 = 720
// // i = 7: result = 720 * 7 = 5040

// function getGreet(name, day) {
//   let greeting;
//   if (day === "ранок") {
//     greeting = "Доброго ранку";
//   } else if (day === "день") {
//     greeting = "Добрий день";
//   } else if (day === "вечір") {
//     greeting = "Добрий Вечір";
//   } else {
//     greeting = "Привіт";
//   }
//   return `${greeting},${name}`;
// }
// console.log(getGreet("Аліна", "день"));

// //Функція для обчислення середнього значення

// function average(a, b, c) {
//   return (a + b + c) / 3;
// }
// console.log(average(5, 10, 15));

// //Створи функцію reverseString, яка приймає рядок і повертає цей рядок, але у зворотному порядку.
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("Mila"));

// function reverseString(str, lettersToRemove) {
//   // Видаляємо зазначені літери з рядка
//   let filteredStr = str
//     .split("")
//     .filter((char) => !lettersToRemove.includes(char))
//     .join("");

//   // Повертаємо рядок у зворотному порядку
//   return filteredStr.split("").reverse().join("");
// }

// // Приклади використання
// console.log(reverseString("Mila", "il")); // "drw eh"
// console.log(reverseString("JavaScript", "a")); // "tpircSvJ"
// console.log(reverseString("OpenAI", "aei")); // "npO"

//Замикання вкладена функція
// function createMultiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }
// const multiplyBy3 = createMultiplier(20);
// console.log(multiplyBy3(10));

//рекурсивної функції

// function recursiveSum(n) {
//   // Базовий випадок: коли n дорівнює 1, повертаємо 1
//   console.log(n);
//   if (n <= 1) {
//     return n;
//   }

//   // Рекурсивний випадок: n додається до результату виклику функції для n - 1
//   return n + recursiveSum(n - 1);
// }

// // console.log(recursiveSum(4));

// function power(base, exponent) {
//   return base ** exponent;
// }
// console.log(power(2, 3));

// function isPalindrome(str) {
//   // Приведення рядка до нижнього регістру та видалення пробілів
//   str = str.toLowerCase().replace(/\s+/g, "");

//   // Порівняння рядка з його зворотнім варіантом
//   return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("madam"));
// Метод replace(/\s+/g, '') видаляє всі пробіли з рядка за допомогою регулярного виразу.

// function findMax(array) {
//   let maxNum = 0;
//   console.log(maxNum);
//   for (let i = 0; i < array.length; i++) {
//     if (maxNum < array[i]) {
//       maxNum = array[i];
//     }
//   }
//   return maxNum;
// }

// console.log(findMax([1, 5, 3, 9, 2]));

// function findMin(array) {
//   let minNum;
//   console.log(minNum);
//   for (let i = 0; i < array.length; i++) {
//     if (isNaN(minNum) || minNum > array[i]) minNum = array[i];
//   }
//   return minNum;
// }

// console.log(findMin([5, 3, 9, 2]));

// function isPrime(num) {
//   // Перевірка чи є число менше або дорівнює 1 (не є простим)
//   if (num <= 1) {
//     return false;
//   }

//   // Перевірка всіх можливих дільників від 2 до квадратного кореня з num
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false; // Якщо знайшли дільник, число не є простим
//     }
//   }

//   // Якщо дільників немає, число є простим
//   return true;
// }

// // Приклади використання
// console.log(isPrime(7));

// function countVowels(str) {
//   // Приведення рядка до нижнього регістру
//   str = str.toLowerCase();

//   // Множина голосних літер
//   const vowels = "aeiou";

//   // Лічильник голосних
//   let count = 0;

//   // Проходження по кожній літері рядка і перевірка чи є вона голосною
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// // Приклади використання
// console.log(countVowels("hello world"));
// console.log(countVowels("JavaScript"));

// function sumInput() {
//   let sum = 0;
//   let value;

//   do {
//     value = prompt("Enter a number", 0);
//     if (value === null || isNaN(value)) {
//       break;
//     }
//     sum += +value;
//   } while (true);

//   return sum;
// }

// console.log(sumInput());
// function sumInput() {
//   let arr = [];
//   while (true) {
//     let digit = parseInt(prompt("Enter a number"));
//     console.log(digit);
//     if (isNaN(digit) || digit === undefined || digit === null) {
//       break;
//     }

//     arr.push(digit);
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const result = sumInput();
// console.log("The sum of numeric element " + result);

// const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

// function generateKey() {
//   let key = "";

//   for (let i = 0; i < characters.length; i++) {
//     let random = Math.floor(Math.random() * characters.length);
//     key += characters[random];
//     console.log(random);
//   }

//   return key;
// }
// const key = generateKey(8);
// console.log(key); // eg599gb60q926j8i
