/**
 * @param {number} n
 * @return {boolean}
 */

/*
  1.从2的 0 次幂 开始遍历
  2.终止条件：
    ①.找到相等的值 return true
    ②.直到当前值 > n ，终止循环，最终返回false
*/
var isPowerOfTwo = function (n) {
  for (let i = 0; i < Infinity; i++) {
    if (Math.pow(2, i) === n) return true;
    if (Math.pow(2, i) > n) return false;
  }
};