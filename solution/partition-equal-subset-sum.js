/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  动态规划问题，参考作者：liweiwei1419
  
  dp[i][j] 代表数组从 0 到 i 之间是否有 n 个数加起来等于 j
  最终求 dp[nums.length - 1][target] target 为 nums 数组和的一半
*/
var canPartition = function (nums) {
  if (nums.length === 0) return true;
  if (nums.length === 1) return false;

  let sum = nums.reduce((p, c) => {
    return p + c;
  }, 0);

  if (sum % 2 !== 0) return false;

  let target = sum / 2, n = nums.length;

  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(target + 1).fill(false);
  }

  dp[0][0] = false;
  for (let i = 0; i < n; i++) {
    if (nums[0] <= target) {
      dp[0][nums[0]] = true;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= target; j++) {
      if (dp[i - 1][j] === true) dp[i][j] = true;
      if (nums[i] === j) dp[i][j] = true;
      if (nums[i] < j && dp[i - 1][j - nums[i]] === true) dp[i][j] = true;
    }
  }

  return dp[n - 1][target];
};