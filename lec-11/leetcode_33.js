//leetcode:33 Search in Rotated Sorted Array
let search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid; // Target found, return the index
    } else if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Target is in the left half
      } else {
        left = mid + 1; // Target is in the right half
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  }
  return -1; // Target not found
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(search(nums, target)); // Output: 4
// Time Complexity: O(log n)
// Space Complexity: O(1)
// Note: This function searches for a target value in a rotated sorted array and returns its index if found, or -1 if not found. It uses a modified binary search approach to handle the rotation.
