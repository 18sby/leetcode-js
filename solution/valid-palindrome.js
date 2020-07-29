/**
 * @param {string} s
 * @return {boolean}
 */

/*
  1.先去除非数字和字符串以外的字符
  2.如果剩下的字符串是空，那么返回true
  3.toLowerCase 转换为小写
  4.定义两个指针，遍历到左指针大于右指针停止，如果一左右指针字符一直相等 返回 true
  5.否则返回false
*/
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '');

  if (!s) return true;

  s = s.toLowerCase();

  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};