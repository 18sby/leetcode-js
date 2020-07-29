/**
 * @param {string} s
 * @return {number}
 */

/*
  将下面的思路再优化一下：
  - 从后向前遍历优化一个判断和一个循环
*/
var longestPalindromeSubseq = function (s) {
  let n = s.length,
    dp = new Array(n);

  for (let i = 0; i < n; i++) dp[i] = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        dp[i][j] = 2 + dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
}

/*
  244ms
  动态规划
  思路：
  1.以每个字符串为一个区间开始，初始化 dp 数组 dp[i][i] = 1
    因为每个单个字符串都是回文子序列，而且长度为 1
  2.从长度为 2 开始，逐渐扩大每个区间，看看是不是回文序列，如果是就更新
  3.状态转移方程：
    - 如果s[i] === s[j] -> dp[i][j] = dp[i + 1][j - 1]  + 2
      注意：长度为2，单独处理，因为它的子序列为空，加上 0 即可
    - 否则 -> dp[i][j] = Math.max(dp[i + 1, j], dp[i][j + 1])
    
  核心思想是：- 如果两头相等，那么两头的长度 2 + 中间区域的最长子序列
            - 如果两头不等，那么当前区间的最长子序列为：里面的两个最长区间的
              两个回文子序列中比较大的那一个
  注意：子序列 !== 子串
    - 子序列可以不连续
    - 子串必须连续
    
  最后求：dp[0][n - 1] 也就是整个字符串区间的最长回文子序列
*/
var longestPalindromeSubseq = function (s) {
  let dp = [],
    n = s.length;

  // 构建所有 1 个长度的区间回文序列
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    dp[i][i] = 1;
  }

  // 初始化的所有区间长度都是 1，下面从长度为 2 开始，扩大每一个区间的长度到 n
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;
      if (s.charAt(i) === s.charAt(j)) {
        dp[i][j] = 2 + (len === 2 ? 0 : dp[i + 1][j - 1]);
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
};