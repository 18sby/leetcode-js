/**
 * @param {string} s
 * @return {number}
 */

/*
  没看清题意，以为是在给定的字符串中找连续的回文子串，原来是使用给出的字符串
  重新构建 🤣
  
  思路：统计所有的字符串出现次数，出现偶数次的字符串直接拼到新串的两边
  最后如果剩余字符串，那么在中间拼上一个奇数字符，保证字符串最长
*/
var longestPalindrome = function (s) {
  let map = [], hadSingle = false, count = 0;

  for (let i = 0, n = s.length; i < n; i++) {
    let index = s[i].charCodeAt();
    map[index] = map[index] === undefined ? 1 : map[index] + 1;
  }

  for (let i = 65; i <= 122; i++) {
    let strCount = map[i];
    if (strCount === undefined) continue;

    let rest = strCount % 2;
    if (rest === 1) {
      hadSingle = true; // 有剩余的单个字符串
    }

    count += (strCount - rest);
  }

  if (hadSingle) count += 1;

  return count;
};