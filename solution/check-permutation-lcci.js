/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/*
  1. 遍历 s1，用一个 map 记录 s1 中所有的字符出现的次数
  2. 遍历 s2，如果字符出现过就把 map 中对应的字符串出现次数减1
  3. 如果 map 为空，说明 s1 s2 中所有的字符出现次数相同
*/
var CheckPermutation = function (s1, s2) {
  let map = {};

  for (let i = 0, len = s1.length; i < len; i++) {
    let c = s1.charAt(i);
    if (map[c] === undefined) {
      map[c] = 1;
    } else {
      map[c]++;
    }
  }

  for (let i = 0, len = s2.length; i < len; i++) {
    let c = s2.charAt(i);
    if (map[c] !== undefined) {
      map[c] > 1
        ? map[c]--
        : delete map[c];
    } else {
      // 随便记录一下在 s2 中出现但是没有在 s1 中出现的字符，因为有 s1 比 s2 短的情况
      map[c] = 1;
    }
  }

  return Object.keys(map).length === 0;
};