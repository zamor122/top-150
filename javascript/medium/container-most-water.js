/* 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

class Solution {

  //find two lines of height that make a container with the most water in it

  //in other words, find the two tallest and furthest lines witht the most water in it

  //use a two pointer system, one at beginning and end

  // keep a variable maxArea = 0

  optimal(height) {
    let maxArea = 0;
    let start = 0
    let end = height.length - 1;
    while (start < end) {
      let currArea = Math.min(height[start], height[end]) * (end - start)
      maxArea = Math.max(maxArea, currArea);
      console.log(maxArea)

      if(height[start] < height[end]) {
        start++;
      } else {
        end--;
      }
    }
    return maxArea;
  }
}

const sol = new Solution();
const ans = sol.bruteForce([1,8,6,2,5,4,8,3,7]);
console.log(ans);