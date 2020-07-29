/**
 * @param {string} S
 * @return {string}
 */

/*
  思路：
  1.把字符串 S 变成数组
  2.双指针从后向前遍历，当左右指针找到都是字母的字符串并且索引位置不同时，交换
  3.终止条件，左指针索引大于等于右指针
*/
var reverseOnlyLetters = function (S) {
  S = S.split('');
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let left = 0, right = S.length - 1;
  while (left < right) {
    while (left < right && !letters.includes(S[left])) left++;
    while (left < right && !letters.includes(S[right])) right--;
    [S[left], S[right]] = [S[right], S[left]];
    left++;
    right--;
  }

  return S.join('');
};