/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/*
  典型的滑动窗口
  判断从每个字符串开始，截取 p 的长度的单词是否和 p 为字母异位词
  异位词：两个单词的组成字母和他们的数量一致
*/
var findAnagrams = function (s, p) {
  let mapP = {}, map = {}, ans = [],
    slen = s.length, plen = p.length;

  if (slen < plen) return [];

  for (let i = 0; i < plen; i++) {
    let cp = p.charAt(i),
      cs = s.charAt(i);

    if (mapP[cp] === undefined) mapP[cp] = 1;
    else mapP[cp]++;

    if (map[cs] === undefined) map[cs] = 1;
    else map[cs]++;
  }

  // 对比字符串个数是否相等
  function isEqual(a, b) {
    let flag = true;

    for (let key in b) {
      if (b[key] !== a[key]) {
        flag = false;
        break;
      }
    }

    return flag;
  }

  if (isEqual(map, mapP)) ans.push(0);

  for (let i = plen; i < slen; i++) {
    let c = s.charAt(i),
      last = s.charAt(i - plen);

    if (map[c] === undefined) map[c] = 1;
    else map[c]++;

    if (map[last] === 0) {
      delete (map[last]);
    } else {
      map[last]--;
    }

    if (isEqual(map, mapP)) {
      ans.push(i - plen + 1);
    }
  }

  return ans;
};