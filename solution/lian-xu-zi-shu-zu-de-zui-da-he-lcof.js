/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  原地修改：
  每个位置存储当前位置的最大连续子数组和，最后返回此数组的最大值
*/
var maxSubArray = function (nums) {
  let dp = [];
  dp[0] = nums[0];

  for (let i = 0, len = nums.length; i < len; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = nums[i] + dp[i - 1];
    } else {
      dp[i] = nums[i];
    }
  }

  return Math.max(...dp);
};