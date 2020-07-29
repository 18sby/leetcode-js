/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let result = 0, isEmpty = true;
  for (let len = s.length, i = len - 1; i >= 0; i--) {
    if (isEmpty && s[i] !== ' ') {
      result++;
      isEmpty = false;
    }
    else if (s[i] !== ' ') {
      result++;
    }
    else if (!isEmpty) {
      break;
    }
  }
  return result || 0;
};