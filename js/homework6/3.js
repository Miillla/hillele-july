const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
  let response = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== item) {
      response.push(array[i]);
    }
  }
  return response;
}

let newArray = removeElement(array, 6);
console.log(newArray);
