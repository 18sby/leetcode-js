/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let dp = [],
    col = word1.length,
    row = word2.length;
  if (col * row === 0) return col + row;

  // 列
  for (let i = 0; i <= col; i++) {
    dp.push([]);
    dp[i].push(i);
  }

  // 行
  for (let j = 1; j <= row; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }

  for (let i = 1; i <= col; i++) {
    for (let j = 1; j <= row; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
      else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[col][row];
};