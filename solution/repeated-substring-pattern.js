/**
 * @param {string} s
 * @return {boolean}
 */

/*
  借鉴别人思路：把字符串 s 掐头去尾留中间，如果还包含 s，那么符合要求
*/
var repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, s.length * 2 - 1).indexOf(s) > -1;
};