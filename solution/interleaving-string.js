/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

/*
  动态规划
  dp[i][j]: s1 的前 i 个字符 和 s2 的前 j 个字符，能否构成 s3 的前 i+j 个字符
*/
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  let len1 = s1.length,
    len2 = s2.length,
    len3 = s3.length,
    dp = new Array(len1 + 1).fill(1).map(_ => new Array(len2 + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= len1 && s1.charAt(i - 1) === s3.charAt(i - 1); i++) {
    dp[i][0] = true;
  }
  for (let i = 1; i <= len2 && s2.charAt(i - 1) === s3.charAt(i - 1); i++) {
    dp[0][i] = true;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      let top = dp[i - 1][j] && s3.charAt(i + j - 1) === s1.charAt(i - 1),
        left = dp[i][j - 1] && s3.charAt(i + j - 1) === s2.charAt(j - 1);
      dp[i][j] = top || left;
    }
  }

  return dp[len1][len2];
};