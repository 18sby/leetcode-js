/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */

// 按照题意来就行了
var xorOperation = function (n, start) {
  let ans = start;
  for (let i = 1; i < n; i++) {
    ans ^= start + 2 * i;
  }
  return ans;
};