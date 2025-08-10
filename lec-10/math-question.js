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

//usign uclidian algorithm for GCD
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

//factors of a number
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
