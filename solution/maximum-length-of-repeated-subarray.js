/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

/*
  dp[i][j]: 以A[i] 和 B[j] 结尾的最长子数组的长度
  条件：A[i] === B[j]
*/
var findLength = function (A, B) {
  let len_A = A.length,
    len_B = B.length,
    dp = new Array(len_B + 1).fill(0),
    max = 0;

  for (let i = 1; i <= len_A; i++) {
    for (let j = len_B; j >= 1; j--) {
      if (A[i - 1] === B[j - 1]) {
        dp[j] = dp[j - 1] + 1;
      } else {
        dp[j] = 0;
      }
      max = Math.max(dp[j], max);
    }
  }

  return max;
};