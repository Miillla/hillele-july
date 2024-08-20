function sortArray(a, b) {
  console.log(a, b);
  return a - b;
}

function callculate() {
  let array = [];

  while (true) {
    let digit = parseInt(prompt("Enter a number" + (array.length + 1)));

    if (isNaN(digit) || digit === undefined || digit === null) {
      break;
    }

    array.push(digit);
  }

  return array.sort(sortArray);
}

let nums = callculate();
document.write(nums.join(", "));

document.write("<br>");
document.write(nums.splice(2, 3));
document.write("<br>");
document.write(nums.join(", "));
