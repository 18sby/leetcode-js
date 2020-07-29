/**
 * @param {string} s
 * @return {boolean}
 */

/*
  搞懂正则语法，把题目要求的几种类型分别去匹配就好了，可以整理为1个正则，但没必要，这样
可能还有一丢丢可读性。。。
  1.
  0.2
  .2
  +5.3
  -3.5
  "-1."
*/
var isNumber = function (s) {
  s = s.trim();
  let reg1 = /^[+-]?((\d+)?\.)?\d+\.?e[+-]?\d+$/i; // 带e的
  let reg2 = /^[+-]?\d+(\.\d+)?$/;
  let reg3 = /^[+-]?\d+\.$/;
  let reg4 = /^[+-]?\.\d+$/;
  return reg1.test(s) || reg2.test(s) || reg3.test(s) || reg4.test(s);
};