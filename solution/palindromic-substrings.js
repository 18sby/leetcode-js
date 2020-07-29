/**
 * @param {string} s
 * @return {number}
 */

/*
  参考作者「icecrea」太巧妙了
  动态规划
  从每个字符开始，向前遍历，从当前字符串之前的每个位置截取到这个字符串如果为回文字符，
  那么+1
  
  动态转移方程：
  比如：'abcba' 来说，只要 开头的 'a' === 结尾的 'a' 并且中间的 'bcb' 是回文子串，
  那么 'abcba' 就是回文子串
*/
var countSubstrings = function (s) {
  let n = s.length,
    dp = new Array(n),
    count = 0;

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(false);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      if (s.charAt(j) === s.charAt(i) && (
        i - j <= 1 || dp[j + 1][i - 1]
      )) {
        dp[j][i] = true;
        count++;
      }
    }
  }

  return count;
};