//print 1 - n natural no
function printNaturalNumbers(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  printNaturalNumbers(n - 1);
}
printNaturalNumbers(5); // Output: 5 4 3 2 1

//print 1 - n natural no in reverse order
function printNaturalNumbersReverse(n) {
  if (n <= 0) {
    return;
  }
  printNaturalNumbersReverse(n - 1);
  console.log(n);
}
printNaturalNumbersReverse(5); // Output: 1 2 3 4 5

//sum of first n natural numbers
function sum(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sum(n - 1);
}
console.log("Sum of n no:" + sum(5)); // Output: 15

//factorial of n
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log("Factorial no:" + factorial(5)); // Output: 120

//when our recursive call require previour result then we must be call the recusrsive call with return key word
//otherwise it will not return the result

//fibonacci series
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
function printFibonacciSeries(n) {
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}
printFibonacciSeries(5); // Output: 0 1 1 2 3

//basic Fibo without recursion
let n = 5;
let first = 0;
let second = 1;
console.log(first + " " + second + " ");
for (let i = 2; i < n; i++) {
  let thirth = first + second;
  console.log(thirth + " ");
  first = second;
  second = thirth;
}
