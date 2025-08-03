//leetcode question 121
function maxProfit(prices) {
  let maxProfit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    let profit = prices[i] - min;
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log("Maximum profit:", maxProfit(prices));

//leetcode question 75
function sortColors(nums) {
  let i = 0,
    j = 0,
    k = nums.length - 1;
  while (i < k) {
    if (nums[i] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; //swapping
      i++;
      j++;
    } else if (nums[i] === 2) {
      [nums[i], nums[k]] = [nums[k], nums[i]]; //swapping
      k--;
    } else {
      i++;
    }
  }
}

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log("Sorted colors:", nums);

//leetcode question 53 kedane's algorithm
function maxSubArray(nums) {
  let maxSum = -Infinity;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    maxSum += nums[i];
    max = Math.max(maxSum, max);
    if (maxSum < 0) {
      maxSum = 0;
    }
  }
  return max;
}

let numsArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum subarray sum:", maxSubArray(numsArray));

//leetcode question 169 moore's voting algorithm
function majorityElement(nums) {
  let count = 0;
  let ans = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      ans = nums[i];
    }
    if (nums[i] === ans) {
      count++;
    } else {
      count--;
    }
  }
  return ans;
}
let numsMajority = [3, 2, 3];
console.log("Majority element:", majorityElement(numsMajority));

//leetcode question 42 trapping rainwater
function trap(height) {
  let left = new Array(height.length);
  let right = new Array(height.length);
  let maxLeft = height[0],
    maxRight = height[height.length - 1];
  left[0] = maxLeft;
  right[height.length - 1] = maxRight;

  for (let i = 1; i < height.length; i++) {
    maxLeft = Math.max(maxLeft, height[i]);
    left[i] = maxLeft;
  }
  for (let i = height.length - 2; i >= 0; i--) {
    maxRight = Math.max(maxRight, height[i]);
    right[i] = maxRight;
  }
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    ans += Math.min(left[i], right[i]) - height[i];
  }
  return ans;
}
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("Trapped rainwater:", trap(height));
