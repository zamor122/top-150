/* 
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?
*/

class Solution {

  bruteForce(nums, k) {
    nums.sort((a, b) => a - b);
    
  }

  optimal(nums, k) {

  }
}

const arr = [3,2,1,5,6,4]
const arg = 2;

const sol = new Solution();
const ans = sol.optimal(arr, arg);