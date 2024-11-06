/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

class Solution {
  //brute force using a hash map to keep track of the seen numbers complements
  optimal(nums, target) {
    let complements = {}
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if(complements.hasOwnProperty(complement)) {
        return [complements[complement], i]
      } else {
        complements[nums[i]] = i
      }
    }
  }
}

const sol = new Solution()
const ans = sol.bruteForce([2,7,11,15], 9)

console.log(ans);