function removeLetters(str, lettersToRemove) {
  let result = [];
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];
    let match = false;

    for (let ii = 0; ii < lettersToRemove.length; ii++) {
      if (letter === lettersToRemove[ii]) {
        console.log("match", match);
        match = true;
        break;
      }
    }

    if (!match) {
      result.push(letter);
    }
  }

  return result.join("");
}

let result = removeLetters("Hello world", ["l", "d"]);
console.log(result);
