/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  倒序排序数组，从头开始拿出元素，返回刚好拿出元素之和大于剩余元素之和的序列
*/
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);

  let ans = [], restSum = 0, sum = 0;

  restSum = nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    restSum -= nums[i];
    ans.push(nums[i]);
    if (sum > restSum) break;
  }

  return ans;
};