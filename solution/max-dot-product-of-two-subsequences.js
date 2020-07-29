/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/*
  动态规划
*/
var maxDotProduct = function (nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  let dp = new Array(len1 + 1).fill(1).map(item => new Array(len2 + 1).fill(-Infinity));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      dp[i][j] = Math.max(
        nums1[i - 1] * nums2[j - 1],
        dp[i - 1][j - 1] + nums1[i - 1] * nums2[j - 1],
        dp[i - 1][j],
        dp[i][j - 1],
        dp[i - 1][j - 1]
      )
    }
  }

  return dp[len1][len2];
};