/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

/*
  二进制解法：
  a ^ b 为正常异或操作，当遇到某一位都为1的时候，不会进位
  a & b 为进位加法，但是进位会在当前位，我们应将他前移 1 位
*/
var getSum = function (a, b) {
  let ans;
  while (b !== 0) {
    ans = a ^ b;
    b = (a & b) << 1;
    a = ans;
  }

  return ans;
};