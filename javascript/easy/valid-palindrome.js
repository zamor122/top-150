/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

class Solution {

  bruteForce(s) {
    const cleanedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    if(cleanedString === cleanedString.split('').reverse().join('')) {
      return true;
    }
    return false;

  }

  //two pointers
  optimal(s) {
    // Define pointers
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      // Move left pointer to the next alphanumeric character
      while (left < right && !this.isAlphanumeric(s[left])) {
        left++;
      }
      // Move right pointer to the previous alphanumeric character
      while (left < right && !this.isAlphanumeric(s[right])) {
        right--;
      }
      // Compare characters in lowercase
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  isAlphanumeric(char) {
    return /[a-z0-9]/i.test(char); // Checks if the character is alphanumeric
  }
}

const sol = new Solution();
const ans = sol.optimal("A man, a plan, a canal: Panama");
console.log(ans)