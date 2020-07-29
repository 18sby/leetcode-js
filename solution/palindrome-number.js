/**
 * @param {number} x
 * @return {boolean}
 */

/*
  转为字符串，双指针从两侧到中间判断，如果一直相等，说明是回文
*/
var isPalindrome = function (x) {
  x = String(x);
  let left = 0, right = x.length - 1;
  while (left < right) {
    if (x[left] === x[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};