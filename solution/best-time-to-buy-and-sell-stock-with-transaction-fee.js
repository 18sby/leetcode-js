/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

/*
  动态规划：分析状态
  手中有股票：
    1. 昨天就有，今天没卖
    2. 昨天没有，今天购入
  手中没有股票：
    1. 昨天没有，今天没买
    2. 昨天持有，今天出售
*/
var maxProfit = function (prices, fee) {
  let dp = [], n = prices.length;

  for (let i = 0; i < n; i++) dp[i] = [];
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - fee + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[n - 1][0];
};