//leetcode: 448. Find All Numbers Disappeared in an Array
let findDisappearedNumbers = function (nums) {
  let i = 0;
  let result = [];
  // Step 1: Cyclic sort
  while (i < nums.length) {
    let correctIndex = nums[i] - 1; // Calculate the correct index for the current element
    if (nums[i] !== nums[correctIndex]) {
      // If the current element is not in the correct position, swap it with the element at its correct index
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      // If the current element is in the correct position, move to the next element
      i++;
    }
  }
  // Step 2: Find the missing numbers
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      result.push(j + 1); // Push the missing number (index + 1)
    }
  }
  return result; // Return the array of missing numbers
};
