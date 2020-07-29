/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/*
  136ms
  直观思路：
  合并数组，排序，找中位数
*/
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [...nums1, ...nums2], ans = null, n = nums.length;

  nums.sort((a, b) => a - b);

  let mid = (n - 1) >> 1;
  if (n % 2 === 0) {
    ans = (nums[mid] + nums[mid + 1]) / 2;
  } else {
    ans = nums[mid];
  }

  return ans;
};