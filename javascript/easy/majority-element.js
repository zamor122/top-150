class Solution {
  /* 
  Given an array nums of size n, return the majority element.

  The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
  */
  bruteForce(nums) {
    let numMaps = {};
    for (let i = 0; i < nums.length; ++i) {
      if(numMaps[nums[i]]) {
        numMaps[nums[i]] = numMaps[nums[i]] + 1;
      } else {
        numMaps[nums[i]] = 1;
      }
    }

    const ansVal = Math.max(...Object.values(numMaps));
    return parseInt(Object.keys(numMaps).find((key) => numMaps[key] == ansVal));
  }

  optimal(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
      count += (num === candidate) ? 1 : -1;
    }

    return candidate;
  }
}

const sol = new Solution();
const ans = sol.bruteForce([2,2,1,1,1,2,2]);
console.log(ans);