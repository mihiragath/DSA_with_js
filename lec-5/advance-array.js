const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements in the array: "));
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}
console.log("Element of array is:" + arr);

//left rotation by k times
let l = Number(prompt("Enter the number of rotations: "));
l = l % n;
let tempLeft = new Array(arr.length);
for (let j = 0; j < arr.length; j++) {
  tempLeft[j] = arr[(j + l) % n];
}
console.log("Array after left rotation", tempLeft);

//right rotation by k times
let r = Number(prompt("Enter the number of rotations: "));
r = r % n;
let tempRight = new Array(arr.length);
for (let j = arr.length; j < 0; j++) {
  tempLeft[(j + r) % n] = arr[j];
}
console.log("Array after RIght rotation", tempRight);
