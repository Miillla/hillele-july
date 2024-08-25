function input() {
  let arr = 10;

  for (let i = 0; i <= 10; i++) {
    let digit = parseInt(prompt("Enter a number biggest than 100"));
    console.log(digit);
    if (isNaN(digit) || digit === undefined || digit === null || digit <= 100) {
      continue;
    }
    arr.push(digit);
  }
  return arr, c;
}

const result = input();
console.log(result);
