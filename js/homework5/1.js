let digit = 20;
let maxDigit = 30;
let num = 0.5;

for (let i = digit; i <= maxDigit; i++) {
  let sum = num + i;
  let result = `${i}`;
  if (sum < maxDigit) {
    result += `, ${sum}`;
  }
  console.log(result);
}
