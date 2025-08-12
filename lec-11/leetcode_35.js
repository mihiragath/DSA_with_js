//leetcode: 35. Search Insert Position
let searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid; // Target found, return the index
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }
  return left; // Target not found, return the insertion position
};

let nums = [1, 3, 5, 6];
let target = 5;
console.log(searchInsert(nums, target)); // Output: 2
