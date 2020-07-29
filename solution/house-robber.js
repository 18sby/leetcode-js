/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  动态规划
  分析状态转移方程：
  1.由于两间相邻的房屋是不可以接连闯入的
    那么对于dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  2.先处理基本情况 dp[0] dp[1]
*/
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let dp = [],
    n = nums.length;
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
};