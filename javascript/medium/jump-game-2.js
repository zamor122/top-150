/* 
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
*/

class Solution {
  bruteForce(nums) {
    let numJumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest point we can reach from the current position
        farthest = Math.max(farthest, i + nums[i]);

        // If we’ve reached the end of the current range, make a jump
        if (i === currentEnd) {
            numJumps++;
            currentEnd = farthest;

            // Early exit if we’ve already reached the last element
            if (currentEnd >= nums.length - 1) break;
        }
    }

    return numJumps;
  }
}

const sol = new Solution();
const args = [[2,3,1,1,4]];

const ans = args.map((arg) => sol.bruteForce(arg))

console.log(ans);