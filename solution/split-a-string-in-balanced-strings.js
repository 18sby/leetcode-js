/**
 * @param {string} s
 * @return {number}
 */

/*
  动态规划，从左向右遍历，每次遇到等量的 L 和 R，记录此次结果
*/
var balancedStringSplit = function (s) {
  let ans = 0,
    count = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === 'L') count++;
    if (s[i] === 'R') count--;

    if (count === 0) {
      ans++;
    }
  }

  return ans;
};