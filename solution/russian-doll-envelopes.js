/**
 * @param {number[][]} envelopes
 * @return {number}
 */

/*
  动态规划
  1. 先按照 w 升序，w 相同按照 h 降序
  2. 动态规划找最长递增子序列
*/
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  });

  let n = envelopes.length, dp = new Array(n).fill(1), max = 0;

  for (let i = 0; i < n; i++) {
    let height = envelopes[i][1];
    for (let j = 0; j < i; j++) {
      let currHeight = envelopes[j][1];
      if (currHeight < height) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    max = Math.max(dp[i], max);
  }

  return max;
};