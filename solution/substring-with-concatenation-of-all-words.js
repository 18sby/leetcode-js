/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// 思路：
//   1.在 s 上遍历，每次取出 words长度 个字符串
//   2.isPass：比较 每次拿出来的字符串是否符合 words
var findSubstring = function (s, words) {
  if (!s || words.length === 0) return [];
  let wlen = words.length, slen = s.length, result = [], son = words[0].length, totalLen = wlen * son;
  words = words.sort();

  for (let i = 0; i < slen - totalLen + 1; i++) {
    if (isPass(s.substr(i, totalLen), words, wlen, son)) {
      result.push(i);
    }
  }
  return result;
};

// 判断是否符合条件
var isPass = function (cur, words, len, son) {
  let curArr = [];
  for (let i = 0; i < len; i++) {
    curArr.push(cur.substr(i * son, son));
  }
  curArr = curArr.sort();
  if (words.toString() === curArr.toString()) {
    return true;
  }
  return false;
}