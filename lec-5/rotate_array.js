const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements in the array: "));
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}
console.log("Element of array is:" + arr);

//left rotate array by 1
let copyL = arr[0];
for (let i = 0; i < n - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[n - 1] = copyL;
console.log("Array after left rotation by 1: " + arr);

//right rotate array by 1
let copyR = arr[n - 1];
for (let i = n - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = copyR;
console.log("Array after right rotation by 1: " + arr);

// //left rotation by kl times
// let l = Number(prompt("Enter the number of rotations: "));
// l = l % n;
// let tempLeft = new Array(arr.length);
// for (let j = 0; j < arr.length; j++) {
//   tempLeft[j] = arr[(j + l) % n];
// }
// console.log("Array after left rotation", tempLeft);

// //right rotation by kl times
// let r = Number(prompt("Enter the number of rotations: "));
// r = r % n;
// let tempRight = new Array(arr.length);
// for (let j = arr.length; j < 0; j++) {
//   tempLeft[(j + r) % n] = arr[j];
// }
// console.log("Array after RIght rotation", tempRight);

//usign block swipe reverse algorithm
//left rotation by kl times
let kl = Number(prompt("Enter the number of rotations: "));
kl = kl % n;
reverseArray(0, kl - 1);
reverseArray(kl, n - 1);
reverseArray(0, n - 1);
console.log("Array after left rotation: " + arr);
function reverseArray(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

//right rotation by kr times
let kr = Number(prompt("Enter the number of rotations: "));
kr = kr % n;
reverseArray(0, n - 1);
reverseArray(0, kr - 1);
reverseArray(kr, n - 1);
console.log("Array after right rotation: " + arr);
