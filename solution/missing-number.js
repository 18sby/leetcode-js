/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  位运算的异或算法
*/
var missingNumber = function (nums) {
  let ans = nums.length;
  for (let i = 0; i < nums.length; i++) {
    ans ^= i ^ nums[i];
  }
  return ans;
};