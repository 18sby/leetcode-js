/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n % 2 !== 0) return new Array(n).fill('a').join('');
  return 'a' + new Array(n - 1).fill('b').join('')
};