// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else {
    return number1;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(wordArray) {
  console.log(wordArray);
  if (wordArray.length === 0) {
    return null;
  }
  let maxLength = 0;
  let result = "";
  for (let index = 0; index < wordArray.length; index++) {
    wordLength = wordArray[index].length;
    if (wordLength > maxLength) {
      maxLength = wordLength;
      result = wordArray[index];
    }
  }
  return result;
}

// Iteration 3 | Sum Numbers
function sumNumbers(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  if (numbersArray.length === 0) {
    return 0;
  }
  const sum = sumNumbers(numbersArray);
  return sum / numbersArray.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordArray, wordToSearch) {
  if (wordArray.length === 0) {
    return null;
  }
  if (wordArray.includes(wordToSearch)) {
    return true;
  } else {
    return false;
  }
}
