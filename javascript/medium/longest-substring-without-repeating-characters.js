/* 
Given a string s, find the length of the longest substring without repeating characters.
*/

class Solution {

  bruteForce(s) {
    let seen = new Set();
    let maxLength = 1;
    for(let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
        if(seen.has(s[j])) {
          break;
        } else {
          seen.add(s[j])
          maxLength = Math.max(maxLength, j - 1 + 1);
        }
      }
    }

    return maxLength;
  }

  optimal(s) {
    let seen = new Set();
    let maxLength = 0;
    let left = 0;

    for(let right = 0; right < s.length; right++) {
      while(seen.has(s[right])) {
        seen.delete(s[left]);
        left++
      }

      seen.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
  }

}


const sol = new Solution();
console.log(sol.bruteForce("pwwkew"))