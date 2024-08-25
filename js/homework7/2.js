function calculates(a) {
  return function (b) {
    return a * b;
  };
}
let counter = calculates(5)(2);
console.log(counter);
