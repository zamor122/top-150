/* 
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

class Solution {

  optimal(nums) {
    let furthest = 0;

    for(let i = 0; i < nums.length; ++i) {
      if (i < furthest) {
        return false;
      }

      furthest = Math.max(furthest, i + nums[i])

      if(furthest > nums.length - 1) {
        return true
      }
    }

    return false;
  }

}