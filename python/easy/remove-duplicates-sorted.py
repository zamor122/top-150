"""Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k."""

class Solution:
  
  def bruteForce(self, nums: list[int]) -> int:
    nums_set = set(nums)
    [nums_set].sort()
    return len(nums_set)
  
  def optimal(self, nums: list[int]) -> int:
    i = 0
    j = 1
    while j < len(nums):
      if nums[i] != nums[j]:
        i+=1
        nums[i] = nums[j]
      j+=1
    i+=1
    return i
  
sol = Solution()
ans = sol.bruteForce(nums=[0,0,1,1,1,2,2,3,3,4])
print(ans)