/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/*
  dp[i][j]: s 的前 i 个字符和 p 的前 j 个模式是否匹配
  1. s[i-1] === p[j-1] || p[j-1] === '?'
       => dp[i][j] = dp[i-1][j-1]
  2. s[i-1] !== p[j-1] && p[j-1] === '*'
       => dp[i][j] = dp[i-1][j] || dp[i][j-1]
*/
var isMatch = function (s, p) {
  if (p === '*' || p === s) return true;
  let m = s.length,
    n = p.length;
  let dp = new Array(m + 1).fill(1).map(_ => new Array(n + 1).fill(false));

  dp[0][0] = true;
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (s[i - 1] !== p[j - 1] && p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
};