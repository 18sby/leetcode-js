/**
 * @param {number} n
 * @return {number}
 */

/*
  优化空间：
  因为想要到达第 n 级台阶，上一步只能来自于 n - 1 或者 n - 2，那么可以只用
  两个变量存储即可，不需要长度为 n 的 dp 数组了，使空间降为O(1)
*/
var climbStairs = function (n) {
  let lastlast = 1,
    last = 1;
  for (let i = 2; i <= n; i++) {
    let temp = last;
    last = lastlast + last;
    lastlast = temp;
  }
  return last;
};

// 动态规划
// 参考作者：灵魂画师牧码
var climbStairs = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};