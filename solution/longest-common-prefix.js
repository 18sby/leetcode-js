/**
 * @param {string[]} strs
 * @return {string}
 */

/*
  从头开始两两比较前缀，如果为空了直接返回即可
*/
var longestCommonPrefix = function (strs) {
  let len = strs.length;
  if (len === 0) return '';
  let common = strs[0];
  for (let i = 1; i < len; i++) {
    common = compare(common, strs[i]);
    if (common === '') return common;
  }
  return common;
};

function compare(s1, s2) {
  let maxLen = Math.max(s1.length, s2.length);
  let i = 0;
  for (; i < maxLen; i++) {
    if (s1[i] !== s2[i]) {
      return s1.slice(0, i);
    }
  }
  return s1.slice(0, i);
}