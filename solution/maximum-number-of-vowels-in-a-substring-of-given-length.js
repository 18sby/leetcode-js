/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/*
  滑动窗口
*/
var maxVowels = function (s, k) {
  let vowel = 'aeiou', len = s.length, count = 0, max = 0, i = 0;

  for (; i < k; i++) {
    let curr = s.charAt(i);
    if (vowel.indexOf(curr) !== -1) count++;
  }
  max = Math.max(max, count);

  for (; i < len; i++) {
    let curr = s.charAt(i),
      last = s.charAt(i - k);
    if (vowel.indexOf(curr) !== -1) count++;
    if (vowel.indexOf(last) !== -1) count--;
    max = Math.max(count, max);
  }

  return max;
};