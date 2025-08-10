//GCD (Greatest Common Divisor) of two numbers OR HCF (Highest Common Factor)
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
console.log("GCD of 48 and 18 is: " + gcd(48, 18)); // Output: 6

//using iterative approach for GCD
function gcdIterative(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log("GCD of 48 and 18 (Iterative) is: " + gcdIterative(48, 18)); // Output: 6

//usign uclidian algorithm for GCD using subtraction method
// This method repeatedly subtracts the smaller number from the larger one until they are equal
function gcdEuclidean(a, b) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
console.log("GCD of 48 and 18 (Euclidean) is: " + gcdEuclidean(48, 18)); // Output: 6

//factors of a number using square root method
// This method finds factors by checking divisibility up to the square root of the number
let n = 30;
for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
  if (n % i === 0) {
    console.log(i);
  }
}
for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
  if (n % i === 0) {
    if (i !== n / i) {
      console.log(n / i);
    }
  }
}

//range of prime numbers using Sieve of Eratosthenes
// This algorithm efficiently finds all prime numbers up to a given limit
let no = 30;
let arr = new Array(no + 1).fill(true);
arr[0] = arr[1] = false; // 0 and 1 are not prime numbers
for (let i = 2; i <= Math.floor(Math.sqrt(no)); i++) {
  if (arr[i] == true) {
    for (let j = i * i; j <= no; j += i) {
      arr[j] = false; // Marking multiples of i as non-prime
    }
  }
}
for (let i = 2; i <= no; i++) {
  if (arr[i] == true) {
    console.log(i); // Output: Prime numbers in the range
  }
}

//leetcode problem : 50
function myPow(x, n) {
  if (n == 0) return 1;
  let ans = myPow(x, Math.floor(n / 2));
  if (n % 2 == 0) {
    return ans * ans;
  } else {
    return x * ans * ans;
  }
}
console.log("2^10 is: " + myPow(2, 10)); // Output: 1024
