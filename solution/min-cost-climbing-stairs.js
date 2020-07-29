/**
 * @param {number[]} cost
 * @return {number}
 */

/*
  优化空间：由于到达某一位置 i 的最小化费，只和 i - 1 还有 i - 2，有关系
  所以只需要两个的变量存储即可，不需要长度等于 cost.length 的 dp 数组了
*/
var minCostClimbingStairs = function (cost) {
  let n = cost.length,
    beforeLast = 0,
    last = 0,
    min = 0;

  cost[-1] = 0;
  for (let i = 2; i <= n; i++) {
    min = Math.min(last + cost[i - 1], beforeLast + cost[i - 2]);
    beforeLast = last;
    last = min;
  }

  return min;
};

/*
  动态规划，类似斐波那契数列
  
  dp[i]: 从开始位置到位置 i 所需的最小花费，最终求的是dp[cost.length]
  那么到每一个位置 i，都有两种可能，从 i - 2 位置爬上来，或者从 i - 1 位置
  爬上来，所以推导出状态转移方程如下：
  
  dp[i] = Math.min( dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2] )
*/
var minCostClimbingStairs = function (cost) {
  let n = cost.length, dp = new Array(n).fill(0);

  dp[0] = 0;
  cost[-1] = 0;
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
};