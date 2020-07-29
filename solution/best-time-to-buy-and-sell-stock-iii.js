/**
 * @param {number[]} prices
 * @return {number}
 */

/*
  最多完成 2 笔交易
  每天的状态：
  手里持有股票：
    1. 昨天持有，今天没卖
    2. 昨天没有，今天新购入
  手里没有股票：
    1. 昨天持有，今天刚卖的
    2. 昨天没有，今天没买
  
  k有限制：最多为 2，所以状态转移的过程中要对比 k 为 0 1 2 时候的状态
*/
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;

  let dp = [];
  for (let i = 0; i < prices.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= 2; j++) {
      dp[i][j] = new Array(2).fill(0);
    }
  }

  for (let i = 0; i < prices.length; i++) {
    for (let k = 2; k >= 1; k--) {
      if (i === 0) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }
      dp[i][k][0] = Math.max(dp[i - 1][k][1] + prices[i], dp[i - 1][k][0]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
    }
  }

  return dp[prices.length - 1][2][0];
};