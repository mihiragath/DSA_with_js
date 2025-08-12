function pivotIndex(arr, first, last) {
  let pivot = arr[first];
  let i = first + 1;
  let j = last;

  while (i <= j) {
    while (i <= last && arr[i] <= pivot) {
      i++;
    }
    while (j >= first && arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[first], arr[j]] = [arr[j], arr[first]];
  return j; // Return the index of the pivot
}

function quickSort(arr, first, last) {
  if (first >= last) return; // Base case: if the array has one or no elements, it's already sorted
  let pIdx = pivotIndex(arr, first, last);
  quickSort(arr, first, pIdx - 1);
  quickSort(arr, pIdx + 1, last);
}

let arr = [5, 4, 3, 2, 1];
quickSort(arr, 0, arr.length - 1); // O(n log n)
console.log(arr);
// Output: [1, 2, 3, 4, 5]
// Time Complexity: O(n log n)
// Space Complexity: O(log n) for the recursion stack
// Note: The quickSort function sorts the array in place using the divide-and-conquer approach.
// The partition function rearranges the elements in the array such that elements less than the pivot are on the left and those greater are on the right.
// Quick sort is an efficient sorting algorithm that works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
// It is not a stable sort, meaning that it does not preserve the relative order of equal elements.
// Quick sort is generally faster than merge sort for smaller datasets and is often used in practice due to its average-case performance.
// Quick sort is an in-place sorting algorithm, meaning it requires only a small, constant amount of additional storage space.
// The average time complexity of quick sort is O(n log n), but in the worst case (when the smallest or largest element is always chosen as the pivot), it can degrade to O(n^2). However, this can be mitigated by using techniques like randomization or choosing a better pivot.
// Quick sort is widely used in various applications, including sorting large datasets and implementing efficient algorithms in programming languages.
// The quickSort function can be optimized further by using tail recursion or iterative approaches to reduce the recursion stack depth.
// Quick sort is a popular choice for sorting algorithms due to its efficiency and simplicity.
// It is particularly effective for large datasets and is often used in applications where performance is critical.
// Quick sort is a divide-and-conquer algorithm that divides the array into smaller sub-arrays, sorts them, and then combines them back together.
// Quick sort is often preferred over other sorting algorithms like bubble sort or insertion sort due to its superior average-case performance.
// The partitioning step is crucial in quick sort, as it determines the position of the pivot and helps in dividing the array into smaller parts for further sorting.
