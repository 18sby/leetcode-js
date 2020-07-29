/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  只需要排序后，比较最大的两个数的乘积以及最小的两个数的乘积，返回较大的即可，
  结果为 0 的情况也包含在这两种情况中
*/
var maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let max = (nums[0] - 1) * (nums[1] - 1);

  let min = (nums[n - 1] - 1) * (nums[n - 2] - 1);

  return Math.max(min, max);
};