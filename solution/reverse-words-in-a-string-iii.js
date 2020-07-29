/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  let result = '',
    temp = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result += temp;
      result += ' ';
      temp = '';
    }
    else {
      temp = s[i] + temp;
    }
  }

  if (temp) {
    result += temp;
  }

  return result;
};