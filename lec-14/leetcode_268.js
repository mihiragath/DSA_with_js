//leetcode 268. Missing Number
let missingNumber = function (nums) {
  let i = 0;

  // Step 1: Cyclic sort
  while (i < nums.length) {
    let correctIndex = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  // Step 2: Find the missing number
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) {
      return j;
    }
  }

  // Step 3: If all numbers are at correct index
  return nums.length;
};

let nums = [3, 0, 1];
console.log(missingNumber(nums)); // Output: 2
// Time Complexity: O(n)
// Space Complexity: O(1)
// Note: This function finds the missing number in an array containing n distinct numbers in the range [0, n].
// It uses a cyclic sort approach to place each number at its correct index and then checks for the first index where the number does not match its index. If all numbers are in their correct positions, it returns n as the missing number.
