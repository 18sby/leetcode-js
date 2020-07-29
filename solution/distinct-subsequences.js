/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

/*
  动态规划
*/
var numDistinct = function (s, t) {
  let m = s.length,
    n = t.length,
    dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) dp[i] = new Array(m + 1).fill(0);
  for (let i = 0; i <= m; i++) dp[0][i] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] += dp[i][j - 1];
      if (s.charAt(j - 1) === t.charAt(i - 1)) {
        dp[i][j] += dp[i - 1][j - 1];
      }
    }
  }

  return dp[n][m];
};