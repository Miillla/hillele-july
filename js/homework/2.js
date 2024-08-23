let arrNums = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

function getSumOfPositive(arr) {
  let a = { sumPositiveNums: arr[0] };
  let b = { numMin: arr[0], index: 0 };
  let c = { numMax: arr[0], index: 0 };
  let d = { amountNegative: arr[0], index: 0 };
  let e = { amountOfPositiveOdd: 0 };
  let f = { amountOfPositiveEven: 0 };
  let g = { sumPositiveOdd: 0 };
  let h = { sumPositiveEven: 0 };
  let multI = { multiplyPositive: 1 };
  let j = { bigArr: 0, index: 0 };
  let numResult = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      a.sumPositiveNums += arr[i];
      multI.multiplyPositive *= arr[i];
    }

    if (arr[i] < 0) {
      d.amountNegative += arr[i];
    }
    if (arr[i] > 0 && arr[i] < b.numMin) {
      b.numMin = arr[i];
      b.index = i;
    }
    if (arr[i] > 0 && arr[i] > c.numMax) {
      c.numMax = arr[i];
      c.index = i;
    }

    if (arr[i] > 0 && arr[i] % 2 === 1) {
      g.sumPositiveOdd += arr[i];
      e.amountOfPositiveOdd++;
    }

    if (arr[i] > 0 && arr[i] % 2 === 0) {
      h.sumPositiveEven += arr[i];
      f.amountOfPositiveEven++;
    }
    if (arrNums[i] > j.bigArr || j.bigArr === 0) {
      j.bigArr = arrNums[i];
      j.index = i;
    }
  }
  numResult[j.index] = j.bigArr;
  return { a, b, c, d, e, f, g, h, multI, j, numResult };
}
let result = getSumOfPositive(arrNums);
console.log(result);
console.log("numResult", result.numResult);
console.log(`Big nums ${result.j.bigArr} at index ${result.j.index}`);

// let nums = [5, 3, 19, 2];

// let numResult = new Array(nums.length).fill(0);
// let j = { bigArr: 0, index: 0, result: [] };

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);

//   if (nums[i] > j.bigArr || j.bigArr === 0) {
//     j.bigArr = nums[i];
//     j.index = i;
//   }
// }
// numResult[j.index] = j.bigArr;
// console.log(numResult);
// console.log(`Big nums ${result.j.bigArr} at index ${result.j.index}`);
