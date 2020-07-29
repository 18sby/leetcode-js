/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  利用两个数组保存前缀积和后缀积，对于每一个 nums[i]
  multiple[i] = L[i] * R[i]
  最后答案直接在 nums 上更改
*/
var productExceptSelf = function (nums) {
  let L = [], R = [], n = nums.length;

  L[0] = 1; R[n - 1] = 1;
  for (let i = 1; i < n; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = L[i] * R[i];
  }

  return nums;
};