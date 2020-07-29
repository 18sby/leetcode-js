/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/*
  学习 KMP 算法
  KMP
  LPS 最长公共前缀和后缀
  
  思路：
  1.求 needle 字符串每个位置的最长公共前缀和后缀
  2.设定两个指针，i 遍历 needle，j 遍历 haystack，从第一个字符开始，
  将 needle 与 haystack 的字符去对比，一旦发现不相等，可将直接跳到
  needle 当前字符的 的最长公共后缀的位置
*/
var strStr = function (haystack, needle) {
  function getLPS(s) {
    let i = 1, len = 0, lps = new Array(s.length).fill(0);

    while (i < s.length) {
      if (s.charAt(i) === s.charAt(len)) {
        lps[i] = len + 1;
        i++;
        len++;
      } else if (len > 0) {
        len = lps[len - 1];
      } else {
        i++;
      }
    }

    return lps;
  }

  let lps = getLPS(needle);

  let i = 0, j = 0, ans = -1, m = haystack.length, n = needle.length;

  if (n === 0) return 0;

  while (i < m) {
    if (haystack.charAt(i) === needle.charAt(j)) {
      i++;
      j++;
      if (j === n) {
        ans = i - n;
        break;
      }
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }

  return ans;
};