/**
 * @param {number} x
 * @return {number}
 */

// 思路：
// 1.先翻转
// 2.判断绝对值 是否 符合数值范围
var reverse = function (x) {
  let afterAbs = Math.abs(x).toString().split('').reverse().join('')
  if (afterAbs <= Math.pow(2, 31) - 1) {
    return x > 0 ? afterAbs : -afterAbs
  }
  return 0;
};
reverse(-109);