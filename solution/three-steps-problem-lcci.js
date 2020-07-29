/**
 * @param {number} n
 * @return {number}
 */

/*
  动态规划：
  分析：
    到达每一级台阶的总方法数等于，它前面1级，前面2级，前面3级的总台阶数和，
    因为他前面的1级、2级、3级、台阶都可以一步到达本级台阶
  状态转移方程：
    dp[n] = dp[n-1] + dp[n-2] + dp[n-3];
  优化空间：
    由于第 n 级台阶，只和 n-1 n-2 n-3 有关，所以只需要三个变量记录即可，
    不需要 dp 数组了
*/
var waysToStep = function (n) {
  if (n < 2) return 1;
  if (n === 2) return 2;
  let model = 1e9 + 7;
  let dp = new Array(n + 1);
  let last3 = 1, last2 = 1, last1 = 2;
  for (let i = 3; i <= n; i++) {
    let templast2 = last2, templast1 = last1;
    last1 = (last1 + last2 + last3) % model;
    last2 = templast1;
    last3 = templast2;
  }
  return last1 % model;
};