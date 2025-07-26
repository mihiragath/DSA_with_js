//sum of n natural number
const prompt = require("prompt-sync")();
let pr = prompt("Enter a number: ");

if (pr == null) {
  console.log("Cancelled");
} else {
  let no = Number(prompt("Enter a number: "));
  let sum = 0;

  if (isNaN(no) || no < 1) {
    console.log("Please enter a valid positive number.");
  }

  for (let i = 1; i <= no; i++) {
    sum += i;
  }
  console.log(`Sum of first ${no} natural numbers is ${sum}`);
}

//factorial No
let no = Number(prompt("Enter a number: "));
let fact = 0;

if (isNaN(no) || no < 0) {
  console.log("Please enter a valid non-negative number.");
}
if (no === 0 || no === 1) {
  fact = 1;
} else {
  fact = 1;
  for (let i = 2; i <= no; i++) {
    fact *= i;
  }
}
console.log(`Factorial of ${no} is ${fact}`);

//factors of a number
let primeNo = Number(prompt("Enter a number to check if it's prime: "));

if (isNaN(primeNo) || primeNo < 2) {
  console.log("Please enter a valid number greater than 1.");
} else {
  if (checkPrime(primeNo)) {
    console.log(`${primeNo} is a prime number.`);
  } else {
    console.log(`${primeNo} is not a prime number.`);
  }
}

// Optimized prime checking function
function checkPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
