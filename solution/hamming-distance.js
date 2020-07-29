/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

/*
  二进制的 ^ 操作结果转化为字符串，在统计 '1' 的个数，不同位的运算结果是 1
*/
var hammingDistance = function (x, y) {
  let ans = (x ^ y).toString(2);
  let count = 0;

  for (let i = 0; i < ans.length; i++) {
    if (ans.charAt(i) === '1') count++;
  }

  return count;
};