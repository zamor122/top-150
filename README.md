# Top 150—Important Problems
  ## Two Sum
  ### - JavaScript Solution
    - General Algorithm:
      - In a single pass, check to see if the current element's compliment is stored in the hash map
      - If it is, return the current number and it's complement
      - If not, store the complement as the key and the current element's index as the value

      Code:
      ```js
      let complements = {}
      for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(complements.hasOwnProperty(complement)) {
          return [complements[complement], i]
        } else {
          complements[nums[i]] = i
        }
      }
      ```