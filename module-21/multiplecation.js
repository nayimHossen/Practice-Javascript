function sumOfNumbers(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
}

const result = sumOfNumbers(7);
console.log(result);
