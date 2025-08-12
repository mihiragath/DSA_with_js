function mergeSort(arr, first, mid, last) {
  //O(n)
  let i = first;
  let j = mid + 1;
  let k = 0;
  let temp = new Array();

  while (i <= mid && j <= last) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
      // i++;
      // k++;
    } else {
      temp[k++] = arr[j++];
      // j++;
      // k++;
    }
  }
  while (i <= mid) {
    temp[k++] = arr[i++];
    // i++;
    // k++;
  }
  while (j <= last) {
    temp[k++] = arr[j++];
    // j++;
    // k++;
  }
  let p = 0,
    q = first;
  while (p < temp.length) {
    arr[q++] = temp[p++];
    // p++;
    // q++;
  }
}

function devide(arr, first, last) {
  //O(log n)
  let mid = Math.floor((first + last) / 2);
  if (first < last) {
    devide(arr, first, mid);
    devide(arr, mid + 1, last);
    mergeSort(arr, first, mid, last);
  }
}

let arr = [5, 4, 3, 2, 1];
devide(arr, 0, arr.length - 1); //O(n*log(n))
console.log(arr);
// Output: [1, 2, 3, 4, 5]
// Time Complexity: O(n log n)
// Space Complexity: O(n)
// Note: The mergeSort function merges two sorted halves of the array.
// The devide function recursively divides the array into halves until it reaches a base case of one element.
// The final result is a sorted array.
// This implementation uses a temporary array to store the merged results, which is a common approach in merge sort.
// The mergeSort function is called recursively to sort the array in a divide-and-conquer manner.
// The time complexity of merge sort is O(n log n) and the space complexity is O(n).
// Merge sort is a stable sorting algorithm, meaning that it preserves the relative order of equal elements.
// It is particularly useful for large datasets and is often used in external sorting algorithms.
// Merge sort is a divide-and-conquer algorithm that divides the array into halves, sorts each half, and then merges them back together.
// Merge sort is not an in-place sorting algorithm, as it requires additional space for the temporary array.
// Merge sort is often used in applications where stability is important, such as sorting linked lists or arrays with duplicate elements.
// The mergeSort function can be optimized further by using iterative approaches or in-place merging techniques.
// Merge sort is a widely used sorting algorithm that is efficient for large datasets and has a predictable time complexity.
// Merge sort is a fundamental algorithm in computer science and is often taught in introductory courses on algorithms and data structures.
// Merge sort is a recursive algorithm that can be implemented using both recursion and iteration.
// The mergeSort function can be modified to handle different data types or custom comparison functions.
// Merge sort is a versatile algorithm that can be adapted for various sorting needs, including sorting objects based on specific properties.
