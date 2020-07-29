/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  其实就是前缀和，从 0 开始累加更新原数组就行了
*/
var runningSum = function (nums) {
  let sum = 0, len = nums.length;
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    nums[i] = sum;
  }
  return nums;
};