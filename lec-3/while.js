//sum of digit
const prompt = require("prompt-sync")();
let num = prompt("Enter a number digits: ");
let sum = 0;
if (num == null) {
  console.log("Cancelled");
}
while (num > 0) {
  sum += num % 10; //add last digit to sum
  num = Math.floor(num / 10); //remove last digit
}
console.log("Sum of digits is: " + sum);

//reverse a number
let number = prompt("Enter a number to reverse: ");
let reversed = 0;
if (number == null) {
  console.log("Cancelled");
}
while (number > 0) {
  reversed = reversed * 10 + (number % 10); //add last digit to reversed
  number = Math.floor(number / 10); //remove last digit
}
console.log(reversed + " is the reversed number.");

//strong number
let input = prompt("Enter a number to check if it's a strong number:");

if (input === null || isNaN(input) || Number(input) < 0) {
  console.log("Invalid input or cancelled.");
} else {
  let strongNum = Number(input);
  let copyStrongNum = strongNum;
  let strongSum = 0;

  while (strongNum > 0) {
    let rem = strongNum % 10;
    let fact = 1;

    for (let i = 1; i <= rem; i++) {
      fact *= i;
    }

    strongSum += fact;
    strongNum = Math.floor(strongNum / 10);
  }

  if (strongSum === copyStrongNum) {
    console.log(`${copyStrongNum} is a Strong Number.`);
  } else {
    console.log(`${copyStrongNum} is NOT a Strong Number.`);
  }
}
