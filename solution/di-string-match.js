/**
 * @param {string} S
 * @return {number[]}
 */

/*
  思路：
  根据 S 的长度，确定数组的元素 0 - S.length
  遍历 S，如果是 'I'，就从左边取一个数，'D'，从右边取一个数
*/
var diStringMatch = function (S) {
  let min = 0, max = S.length, ans = [];

  for (let i = 0, len = S.length; i < len; i++) {
    if (S.charAt(i) === 'I') {
      ans.push(min);
      min++;
    } else {
      ans.push(max);
      max--;
    }
  }

  ans.push(min);

  return ans;
};