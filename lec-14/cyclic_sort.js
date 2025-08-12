let arr = [6, 5, 8, 2, 1, 4, 3, 7];
let n = arr.length;
let i = 0;
while (i < n) {
  let correctIndex = arr[i] - 1; // Calculate the correct index for the current element
  if (arr[i] !== arr[correctIndex]) {
    // If the current element is not in the correct position, swap it with the element at its correct index
    [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
  } else {
    // If the current element is in the correct position, move to the next element
    i++;
  }
}
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// Time Complexity: O(n)
// Space Complexity: O(1)
