/* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Link: https://leetcode.com/problems/merge-sorted-array/description
*/

class MergeSortedArray {
  //nums1 and nums2 are sorted in non-descending order
  optimal(nums1, m, nums2, n) {
    let p1 = m - 1; //end of nums1
    let p2 = n - 1; //end of nums2
    let p = m + n - 1; //end of nums1 concated wit nums2

    //
    while(p1 >= 0 && p2 >= 0) {
      if(nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1]; 
        p1--;
      } else {
        nums1[p] = nums2[p2];
        p2--;
      }
      p--;
    }
    while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p2--;
        p--;
    }
    return nums1;
  }

  bruteForce(nums1, m, nums2, n) {
    return nums1.splice(m-n, n, 3).concat(nums2);
  }
}

const merge = new MergeSortedArray();

const nums1=[1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;

console.log(merge.bruteForce(nums1, m, nums2, n));
