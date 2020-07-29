/**
 * @param {number[]} prices
 * @return {number}
 */

/*
  分析状态：
  每天有两种情况：
  1. 手里持有股票
     - 昨天就有，今天没卖
     - 今天刚卖出
  2. 手里没有股票
     - 今天刚买的
     - 昨天就没有
*/
var maxProfit = function (prices) {
  let dp = [];
  for (let i = 0; i < prices.length; i++) dp[i] = [];

  dp[-1] = [];
  dp[-1][0] = 0;
  dp[-1][1] = -prices[0];

  for (let i = 0; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }

  return dp[prices.length - 1][0];
}

/* 68ms */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let min = prices[0],
    max = 0,
    minIndex = 0,
    maxIndex = 0,
    result = 0;

  for (let i = 1; i < prices.length; i++) {
    let cur = prices[i];
    if (cur < min) {
      minIndex = i;
      min = cur;
    }
    if (i > minIndex) {
      if (cur >= max) {
        maxIndex = i;
        max = cur;
      }
    }
    else {
      maxIndex = i;
      max = cur;
    }
    if (maxIndex > minIndex) {
      result = Math.max(result, max - min);
    }
  }

  return result;
};