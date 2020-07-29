/**
 * @param {string} s
 * @return {string}
 */

// 中心扩展法
var longestPalindrome = function (s) {
  if (s.length === 0) return '';

  let n = s.length, start = 0, end = 1,
    dp = new Array(n).fill(1).map(item => new Array(n).fill(false));

  // 初始化每个单个的字符串都是回文串，如果两个字符串是回文串那么也初始化一下
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    if (i < n - 1 && s.charAt(i) === s.charAt(i + 1)) {
      dp[i][i + 1] = true;
      start = i; end = i + 2;
    }
  }

  // 以每个单个字符串和每个两个连续的字符串为中心去扩散
  for (let i = 0; i < n; i++) {
    search(i - 1, i + 1)
    if (i + 1 < n && dp[i][i + 1]) search(i - 1, i + 2);
  }

  function search(l, r) {
    while (l >= 0 && r < n) {
      if (dp[l + 1][r - 1] && s.charAt(l) === s.charAt(r)) {
        dp[l][r] = true;
        if (r - l + 1 > (end - start)) {
          start = l; end = r + 1;
        }
      } else {
        break;
      }

      l--; r++;
    }
  }

  return s.slice(start, end);
};

/*
  550ms
  动态规划:
  dp[i][j]: 从 i 到 j 位置的子串是否为回文串
  dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
*/
var longestPalindrome = function (s) {
  if (s.length === 0) return '';

  let n = s.length, start = 0, end = 1,
    dp = new Array(n).fill(1).map(item => new Array(n).fill(false));

  // 初始化每个单个的字符串都是回文串，如果两个字符串是回文串那么也初始化一下
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    if (i < n - 1 && s.charAt(i) === s.charAt(i + 1)) {
      dp[i][i + 1] = true;
      start = i; end = i + 2;
    }
  }

  for (let i = n; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (j - i > 1) {
        dp[i][j] = dp[i + 1][j - 1] && s.charAt(i) === s.charAt(j);
        if (dp[i][j] && j - i + 1 > (end - start)) {
          start = i; end = j + 1;
        }
      }
    }
  }

  return s.slice(start, end);
};