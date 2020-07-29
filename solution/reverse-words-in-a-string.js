/**
 * @param {string} s
 * @return {string}
 */

/*
  1.去除两端空格，正则把中间的多个空格匹配成一个空格
  2.用空格分隔成数组，翻转，拼接
*/
var reverseWords = function (s) {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
}

var reverseWords = function (s) {
  if (!s) return '';

  s = s.trim();
  let space = false,
    temp = '',
    res = '';

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ' && space) {
      res += temp;
      temp = '';
      space = false;
    }

    if (s[i] !== ' ') {
      temp = s[i] + temp;
    }
    else if (s[i] === ' ' && !space) {
      space = true;
      temp += ' ';
    }
  }

  return temp ? res + temp : res;
};