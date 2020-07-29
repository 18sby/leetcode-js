/**
 * @param {number[]} prices
 * @return {number}
 */

/*
  分析状态：
  1.今天持有：
    - 昨天就持有，今天没卖
    - 前天卖出，今天购入
  2.今天没有：
    - 昨天出售，今天不可以买
    - 昨天持有，今天卖出
*/
var maxProfit = function (prices) {
  let dp = [], n = prices.length;
  if (n === 0) return 0;

  for (let i = -1; i < n; i++) dp[i] = [];
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[-1][0] = 0;

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }

  return dp[n - 1][0];
};