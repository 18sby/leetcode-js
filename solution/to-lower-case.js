/**
 * @param {string} str
 * @return {string}
 */

/*
  大写：65 。。。
  小写：97 。。。
  考察 String.fromCharCode 和 charCodeAt 的使用，以及大小写字母 Ascll 表中的关系
*/
var toLowerCase = function (str) {
  let ans = '',
    upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0, len = str.length; i < len; i++) {
    if (upperLetters.indexOf(str[i]) > -1) {
      let n = String.fromCharCode(str[i].charCodeAt() + 32);
      ans += n;
    } else {
      ans += str[i];
    }
  }

  return ans;
};