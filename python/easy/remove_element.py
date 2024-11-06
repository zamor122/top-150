class RemoveElement:

  def optimal(self, nums: list[int], val: int) -> int:
    k = 0

    for i in range(len(nums)):
      if nums[i] != val:
        nums[k] = nums[i]
        k+=1
    return k
  
  def bruteForce(self, nums: list[int], val: int):
    return nums
  
remove_element = RemoveElement()
nums = [3,2,2,3]
val = 3

ans = remove_element.optimal(nums, val)
print(ans) 