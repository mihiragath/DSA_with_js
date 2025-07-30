const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements in the array: "));
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}
console.log("Element of array is:" + arr);

//sum of N elements
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i];
}
process.stdout.write("Sum of elements: " + sum + "\n");

//max  element
let max = arr[0];
for (let i = 1; i < n; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
process.stdout.write("Max element: " + max + "\n");

//second max element
let firMax = Math.max(arr[0], arr[1]);
let secMax = Math.min(arr[0], arr[1]);
for (let i = 1; i < n; i++) {
  if (arr[i] > firMax) {
    secMax = firMax;
    firMax = arr[i];
  } else if (arr[i] > secMax && arr[i] < firMax) {
    secMax = arr[i];
  }
}
process.stdout.write("Second Max element: " + secMax + "\n");

//reverse the array
for (let i = 0; i < Math.floor(n / 2); i++) {
  for (let j = n - 1 - i; j >= n - 1 - i; j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
process.stdout.write("Reversed array: " + arr.join(" ") + "\n");

//2nd way
let i = 0,
  j = n - 1;
while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}

let arr2 = [0, 1, 0, 1, 1, 0, 0, 1, 1];
let p = 0;
let q = 0;
while (p < arr2.length) {
  if (arr2[p] === 0) {
    temp = arr2[p];
    arr2[p] = arr2[q];
    arr2[q] = temp;
    q++;
  }
  p++;
}
process.stdout.write("moved array is: " + arr2.join(" ") + "\n");
