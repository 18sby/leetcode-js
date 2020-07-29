/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  动态规划：
  
  每次计算当前位置的最大上升子序列的时候，要把前面的动规点遍历一遍，找到最大的那个点 + 1
  更新为当前点的值
  
  dp[i] 记录：当前点之前的这小段数组中最长的子序列
*/
var lengthOfLIS = function (nums) {
  let dp = [], n = nums.length, ans = 0;

  if (n === 0) return 0;
  if (n === 1) return 1;

  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(dp[j] + 1, max);
      } else {
        max = Math.max(max, 1);
      }
    }
    dp[i] = max;
    ans = Math.max(dp[i], ans);
  }

  return ans;
};