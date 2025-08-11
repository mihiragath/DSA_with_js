let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;

// Binary Search implementation
// This function searches for a target value in a sorted array using the binary search algorithm
// It returns the index of the target if found, or -1 if not found
function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    let mid = Math.floor((first + (last - first)) / 2);
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      first = mid + 1; // Search in the last half
    } else {
      last = mid - 1; // Search in the first half
    }
  }
  return -1; // Target not found
}
let result = binarySearch(arr, target);
if (result !== -1) {
  console.log(`Element found at index: ${result}`); // Output: Element found at index: 4
} else {
  console.log("Element not found");
}
