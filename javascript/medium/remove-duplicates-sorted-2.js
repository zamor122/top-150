/* 

Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

*/

class Solution {

  //with problem requirements altered
  bruteForce(nums) {
    const numsMap = {}
    const arr = []
    nums.forEach((val) => {
      if(numsMap[val]) {
        numsMap[val] = numsMap[val] +=1
      } else {
        numsMap[val] = 1;
      }
    })

    Object.entries(numsMap).forEach(([key, val]) => {
      for(let i = 0; i < Math.min(val, 2); ++i) {
        arr.push(parseInt(key))
      }
    })

    return arr;
  }

  optimal(nums) {
    let i = 2;
    for (let j = 2; j < nums.length; j++) {
      if(nums[j] !== nums[i - 2]) {
        nums[i] = nums[j]
        i++;
      }
    }

    console.log(nums)
    return i;
  }
}

const sol = new Solution();
const ans = sol.optimal([1,1,1,2,2,3]);

console.log(ans);