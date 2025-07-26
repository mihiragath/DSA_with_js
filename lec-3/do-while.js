//repeat hello
const prompt = require("prompt-sync")();
let repeat = prompt("repeat when you want to stop say exit:");
if (repeat == null) {
  console.log("Cancelled");
} else {
  do {
    console.log("hello");
    repeat = prompt("repeat when you want to stop say exit:");
  } while (repeat !== "exit");
  console.log("Exited the loop");
}

//guess the number
let random = Math.floor(Math.random() * 100) + 1; //random number between 1 and 100
let guess = 0;

while (random !== guess) {
  guess = Number(prompt("Guess a number between 1 and 100: "));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Please enter a valid number between 1 and 100.");
  } else if (guess < random) {
    console.log("Too low! Try again.");
  } else if (guess > random) {
    console.log("Too high! Try again.");
  } else {
    console.log("Congratulations! You've guessed the number: " + random);
  }
}

//sasta calculator
console.log("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");

let choice = Number(prompt("Enter choice (1-4):"));
let a = Number(prompt("Enter First Value:"));
let b = Number(prompt("Enter Second Value:"));

switch (choice) {
  case 1:
    console.log(`Result: ${a + b}`);
    break;
  case 2:
    console.log(`Result: ${a - b}`);
    break;
  case 3:
    console.log(`Result: ${a * b}`);
    break;
  case 4:
    if (b === 0) {
      console.log("Cannot divide by zero.");
    } else {
      console.log(`Result: ${a / b}`);
    }
    break;
  default:
    console.log("Invalid choice. Please enter a number between 1 and 4.");
}
