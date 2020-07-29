/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

/*
  分析每天的状态：
  
  1. 持有股票
    1.1 昨天未持有，今天买入
    1.2 昨天持有，今天仍然持有
    
  2. 未持有股票
     2.1 昨天未持有，今天仍然未持有
     2.2 昨天持有，今天出售掉了
    
  三维数组：
    dp[i][k][p]: 
    i: 第 i 天
    k: 到今天为止共完成 k 次交易
    p: 0 - 未持有股票    1 - 持有股票
*/
var maxProfit = function (k, prices) {
  let n = prices.length;
  let dp = [];

  if (k >= Math.floor(n / 2)) {
    // 这里不需要记录k的状态了，把k当做 +Infinity 即可 使用另一种做法
    return maxProfitIgnoreK(prices);
  }

  for (let i = -1; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= k; j++) {
      dp[i][j] = [0, -Infinity];
      if (i === 0) {
        dp[i][j][1] = -prices[i];
      }
    }
  }

  // console.log( 'dp初始化完毕: ', dp );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i - 1]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i - 1]);
    }
  }

  // console.log( 'dp完: ', dp );
  return dp[n][k][0];

};

// 不需要考虑 k 的做法
var maxProfitIgnoreK = function (prices) {
  let n = prices.length, dp = [];

  for (let i = 0; i <= n; i++) {
    dp[i] = [0, -Infinity];
  }

  for (let i = 1; i <= n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i - 1]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i - 1]);
  }

  return dp[n][0];
}