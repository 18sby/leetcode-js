/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/*
  1. 如果 s1 和 s2 长度不相等，那么一定不是翻转字符串
  2. s1 拼上 s1，这个字符串如果用 indexOf 可以检测到 s2，那么返回 true
*/
var isFlipedString = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  return s1.repeat(2).indexOf(s2) !== -1;
};