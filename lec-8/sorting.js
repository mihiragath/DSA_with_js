//bubble sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//selection sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap arr[i] and arr[minIndex]
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

//insertion sort
function insertionSort(arr) {
  let n = arr.length;
  f;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

let arr = [];
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number of elements in the array: "));
for (let i = 0; i < n; i++) {
  arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}
console.log("Original array: " + arr.join(" "));
let ch = Number(
  prompt(
    "Choose sorting method:\n1. Bubble Sort\n2. Selection Sort\n3. Insertion Sort\nEnter your choice: "
  )
);
switch (ch) {
  case 1:
    console.log("Sorted array using Bubble Sort: " + bubbleSort(arr).join(" "));
    break;
  case 2:
    console.log(
      "Sorted array using Selection Sort: " + selectionSort(arr).join(" ")
    );
    break;
  case 3:
    console.log(
      "Sorted array using Insertion Sort: " + insertionSort(arr).join(" ")
    );
    break;
  default:
    console.log("Invalid choice! Please select 1, 2, or 3.");
    break;
}
