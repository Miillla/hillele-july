let num;
let isPrime = true;
do {
  num = +prompt("Число повинно бути більше 1, щоб бути простим. ");
  console.log(num);
} while (num <= 1 || isNaN(num));

if (num === 1) {
  isPrime = true;
  console.log(`${num} є простим числом.`);
} else {
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      console.log(`${num} не є простим числом.`);
      break;
    }
  }
}
