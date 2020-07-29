/**
 * @param {string} s
 * @return {string}
 */

/*
  思路：
    两个数组：一个数组记录索引，一个数组记录元音字母，然后替换字符串
*/
var reverseVowels = function (s) {
  if (!s) return '';
  let vowel = 'aeiouAEIOU'; // 可以优化为字符串

  s = s.split('');
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (vowel.indexOf(s[left]) === -1) {
      left++;
    }
    if (vowel.indexOf(s[right]) === -1) {
      right--;
    }

    if (vowel.indexOf(s[left]) > -1 && vowel.indexOf(s[right]) > -1) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }

  return s.join('');
};