/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums = Array.from(new Set(nums));
  nums.sort((a, b) => b - a);

  if (nums.length > 2) return nums[2];
  if (nums.length > 0) return nums[0];

  return 0;
};