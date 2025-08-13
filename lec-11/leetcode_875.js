//leetcode: 875. Koko Eating Bananas
let minEatingSpeed = function (piles, h) {
  let left = 1; // Minimum speed
  let right = Math.max(...piles); // Maximum speed
  let result = right; // Initialize result with maximum speed
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (canEatAll(piles, mid, h)) {
      result = mid; // Found a valid speed, update result
      right = mid - 1; // Try to find a smaller speed
    } else {
      left = mid + 1; // Increase the speed
    }
  }
  return result; // Return the minimum speed found
};

function canEatAll(piles, mid, h) {
  let hours = 0; // Initialize hours needed
  for (let i = 0; i < piles.length; i++) {
    hours += Math.ceil(piles[i] / mid); // Calculate hours needed for each pile
  }
  return hours <= h; // Check if total hours is within limit
}
let piles = [3, 6, 7, 11];
let h = 8;
console.log(minEatingSpeed(piles, h)); // Output: 4
// Time Complexity: O(n log m), where n is the number of piles and m is the maximum number of bananas in a pile.
// Space Complexity: O(1)
// Note: This function finds the minimum eating speed such that Koko can finish all bananas within h hours. It uses binary search to efficiently find the optimal speed.
