/* 
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

*/
class Solution {
  //too slow for Leetcode but solves the problem
  bruteForce(nums, k) {
    for (let i = 0; i < k % nums.length; i++) {
      const lastElement = nums.pop();

      nums.unshift(lastElement);
    }
    return nums;
  }

  optimal(nums, k) {
    const n = nums.length
    k = k % n;

    function reverse(start, end) {
      while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
      }
    }

    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
    return nums;
  }
}

const sol = new Solution();
const ans = sol.optimal([1,2,3,4,5,6,7], 3);

console.log(ans);