/**************************************
    Problem one 
 * **********************************/

function mindGame(number) {
  let result = number * 3;

  // adding ten with the result
  result += 10;

  //result divide by two
  result /= 2;

  // result Subtract by five
  result -= 5;

  // return the final result
  return result;
}

const problem1 = mindGame(33);
// console.log(problem1);

/**************************************
    Problem two
 * **********************************/

function evenOdd(string) {
  //check if the number is even
  if (string.length % 2 == 0) {
    return `The number is even.`;
  }

  // if the number is odd
  else {
    return `The number is odd.`;
  }
}

const problem2 = evenOdd("chatgpt");
// console.log(problem2);

/**************************************
    Problem three
 * **********************************/

function isLGSeven(number) {
  if (number < 7) {
    return number - 7;
  } else {
    return number * 2;
  }
}

const problem3 = isLGSeven(15);
// console.log(problem3);

/**************************************
    Problem four
 * **********************************/

function getNegativeNumbers(array) {
  let badData = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      badData.push(array[i]);
    }
  }
  return badData.length;
}
const array = [-4, -9, -5, -33, -55];
const problem4 = getNegativeNumbers(array);
// console.log(problem4);

/**************************************
    Problem five
 * **********************************/

function gemsToDiamond(friend1, friend2, friend3) {
  let firstFriendPow = 21;
  let secondFriendPow = 32;
  let thirdFriendPow = 43;

  // three friends total gems count
  let totalGems = friend1 + friend2 + friend3;

  // gems convert into diamond
  let totalDiamond =
    firstFriendPow * friend1 +
    secondFriendPow * friend2 +
    thirdFriendPow * friend3;

  // if totalDiamond gater than 1000
  if (totalDiamond > 1000) {
    let remainingDiamond = totalDiamond - 2000;
    return remainingDiamond;
  } else {
    return totalDiamond;
  }
}

const result = gemsToDiamond(1, 1, 1);
console.log(result);
